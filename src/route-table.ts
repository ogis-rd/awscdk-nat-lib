import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as core from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import { INatGateway } from './nat-gateway';
import { checkTypeBySymbol } from './util';

const ROUTE_TABLE_SYMBOL = Symbol.for('@ogis-rd/awscdk-nat-lib.RouteTable');

/**
 * A route table.
 */
export interface IRouteTable extends core.IResource {
  /**
   * The ID of the route table.
   *
   * @attribute
   */
  readonly routeTableId: string;

  /**
   * Add a route to the route table.
   *
   * @param id Construct ID.
   * @param options Options for adding a route.
   */
  addRoute(id: string, options: RouteOptions): void;
}

/**
 * Options for a route.
 */
export interface RouteOptions {
  /**
   * The destination of the route.
   */
  readonly destination: Destination;

  /**
   * The target of the route.
   */
  readonly target: Target;
}

abstract class RouteTableBase extends core.Resource implements IRouteTable {
  public abstract routeTableId: string;

  public addRoute(id: string, options: RouteOptions): void {
    const route = new ec2.CfnRoute(this, id, {
      routeTableId: this.routeTableId,
    });

    options.destination._for(route);
    options.target._for(route);
  }
}

/**
 * Properties for a route table.
 */
export interface RouteTableProps {
  /**
   * The VPC in which the route table is created.
   */
  readonly vpc: ec2.IVpc;
}

/**
 * A route table.
 *
 * @resource AWS::EC2::RouteTable
 */
export class RouteTable extends RouteTableBase {
  /**
   * Import an unowned route table from its ID.
   */
  public static fromRouteTableId(scope: Construct, id: string, routeTableId: string): IRouteTable {
    class Import extends RouteTableBase implements IRouteTable {
      public readonly routeTableId = routeTableId;
    }
    return new Import(scope, id);
  }

  /**
   * Return true if the object is a RouteTable.
   */
  public static isRouteTable(x: any): x is RouteTable {
    return checkTypeBySymbol(x, ROUTE_TABLE_SYMBOL);
  }

  public readonly routeTableId: string;

  constructor(scope: Construct, id: string, props: RouteTableProps) {
    super(scope, id);

    Object.defineProperty(this, ROUTE_TABLE_SYMBOL, { value: true });

    const routeTable = new ec2.CfnRouteTable(this, 'Resource', {
      vpcId: props.vpc.vpcId,
    });

    this.routeTableId = routeTable.attrRouteTableId;
  }
}

/**
 * The range of destination IP addresses (CIDR).
 */
export abstract class Destination {
  /**
   * Create an IPv4 destination.
   *
   * @param cidrBlock IPv4 destination CIDR (default '0.0.0.0/0').
   */
  public static ipv4(cidrBlock: string = '0.0.0.0/0'): Destination {
    class Ipv4Destination extends Destination {
      private readonly _cidrBlock = cidrBlock;

      public _for(route: ec2.CfnRoute): void {
        route.destinationCidrBlock = this._cidrBlock;
      }
    }
    return new Ipv4Destination();
  }

  /**
   * Create an IPv6 destination.
   *
   * @param cidrBlock IPv6 destination CIDR (default '::/0').
   */
  public static ipv6(cidrBlock: string = '::/0'): Destination {
    class Ipv6Destination extends Destination {
      private readonly _cidrBlock = cidrBlock;

      public _for(route: ec2.CfnRoute): void {
        route.destinationIpv6CidrBlock = this._cidrBlock;
      }
    }
    return new Ipv6Destination();
  }

  /**
   * Specify the destination for the route.
   *
   * @internal
   */
  public abstract _for(route: ec2.CfnRoute): void;
}

/**
 * The target to send traffic.
 */
export abstract class Target {
  /**
   * Create a NAT gateway target.
   */
  public static natGateway(natGateway: INatGateway): Target {
    class NatGatewayTarget extends Target {
      private readonly natGatewayId = natGateway.natGatewayId;

      public _for(route: ec2.CfnRoute): void {
        route.natGatewayId = this.natGatewayId;
      }
    }

    return new NatGatewayTarget();
  }

  /**
   * Specify the target for the route.
   *
   * @internal
   */
  public abstract _for(route: ec2.CfnRoute): void;
}
