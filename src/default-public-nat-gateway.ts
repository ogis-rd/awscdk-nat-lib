import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';
import { IEip } from './eip';
import { PublicNatGateway } from './nat-gateway';
import { Destination, RouteTable, Target } from './route-table';
import { checkTypeBySymbol } from './util';

const DEFAULT_PUBLIC_NAT_GATEWAY_SYMBOL = Symbol.for('@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway');

/**
 * Properties for a default public NAT gateway.
 */
export interface DefaultPublicNatGatewayProps {
  /**
   * The public subnet that the NAT gateway is in.
   */
  readonly publicSubnet: ec2.IPublicSubnet;

  /**
   * Instances in these private subnets can connect to the internet through the NAT gateway.
   */
  readonly privateSubnets: ec2.IPrivateSubnet[];

  /**
   * The EIP associated with the NAT gateway.
   *
   * @default - automatically allocated.
   */
  readonly eip?: IEip;
}

/**
 * A default public NAT gateway.
 */
export class DefaultPublicNatGateway extends PublicNatGateway {
  /**
   * Return true if the object is a DefaultPublicNatGateway.
   */
  public static isDefaultPublicNatGateway(x: any): x is DefaultPublicNatGateway {
    return checkTypeBySymbol(x, DEFAULT_PUBLIC_NAT_GATEWAY_SYMBOL);
  }

  constructor(scope: Construct, id: string, props: DefaultPublicNatGatewayProps) {
    super(scope, id, {
      publicSubnet: props.publicSubnet,
      eip: props.eip,
    });

    Object.defineProperty(this, DEFAULT_PUBLIC_NAT_GATEWAY_SYMBOL, { value: true });

    props.privateSubnets.forEach((privateSubnet, i) => {
      const routeTable = RouteTable.fromRouteTableId(
        this,
        `PrivateSubnet${i + 1}RouteTable`,
        privateSubnet.routeTable.routeTableId,
      );
      routeTable.addRoute('DefaultRoute', {
        destination: Destination.ipv4(),
        target: Target.natGateway(this),
      });
    });
  }
}
