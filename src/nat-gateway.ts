import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as core from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { IEip, Eip } from './eip';
import { checkTypeBySymbol } from './util';

const PUBLIC_NAT_GATEWAY_SYMBOL = Symbol.for('@ogis-rd/awscdk-nat-lib.PublicNatGateway');

/**
 * A NAT gateway.
 */
export interface INatGateway extends core.IResource {
  /**
   * The ID of the NAT gateway.
   *
   * @attribute
   */
  readonly natGatewayId: string;
}

abstract class NatGatewayBase extends core.Resource implements INatGateway {
  public abstract readonly natGatewayId: string;
}

/**
 * A public NAT gateway.
 */
export interface IPublicNatGateway extends INatGateway {
}

/**
 * Properties for a public NAT gateway.
 */
export interface PublicNatGatewayProps {
  /**
   * The public subnet that the NAT gateway is in.
   */
  readonly publicSubnet: ec2.IPublicSubnet;

  /**
   * The EIP associated with the NAT gateway.
   *
   * @default - automatically allocated.
   */
  readonly eip?: IEip;
}

/**
 * A public NAT gateway.
 *
 * An EIP is automatically allocated to the NAT gateway by default.
 *
 * @resource AWS::EC2::NatGateway
 */
export class PublicNatGateway extends NatGatewayBase implements IPublicNatGateway {
  /**
   * Import an unowned public NAT gateway from its ID.
   */
  public static fromNatGatewayId(scope: Construct, id: string, natGatewayId: string): IPublicNatGateway {
    class Import extends NatGatewayBase implements IPublicNatGateway {
      public readonly natGatewayId = natGatewayId;
    }
    return new Import(scope, id);
  }

  /**
   * Return true if the object is a PublicNatGateway.
   */
  public static isPublicNatGateway(x: any): x is PublicNatGateway {
    return checkTypeBySymbol(x, PUBLIC_NAT_GATEWAY_SYMBOL);
  }

  public readonly natGatewayId: string;

  constructor(scope: Construct, id: string, props: PublicNatGatewayProps) {
    super(scope, id);

    Object.defineProperty(this, PUBLIC_NAT_GATEWAY_SYMBOL, { value: true });

    const eip = props.eip ?? new Eip(this, 'Eip');

    const natGateway = new ec2.CfnNatGateway(this, 'Resource', {
      connectivityType: 'public',
      subnetId: props.publicSubnet.subnetId,
      allocationId: eip.eipAllocationId,
    });

    this.natGatewayId = natGateway.attrNatGatewayId;
  }
}
