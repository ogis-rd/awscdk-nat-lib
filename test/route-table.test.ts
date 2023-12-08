import { Template } from 'aws-cdk-lib/assertions';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as core from 'aws-cdk-lib/core';
import { Destination, IRouteTable, PublicNatGateway, RouteTable, Target } from '../src';

describe('RouteTable', () => {
  let stack: core.Stack;
  let vpc: ec2.IVpc;

  beforeEach(() => {
    stack = new core.Stack();
    vpc = ec2.Vpc.fromVpcAttributes(stack, 'VPC', {
      vpcId: 'vpc-123456789abcdefgh',
      availabilityZones: ['us-east-1a'],
    });
  });

  test('default', () => {
    const routeTable = new RouteTable(stack, 'RouteTable', {
      vpc,
    });

    expect(RouteTable.isRouteTable(routeTable)).toBe(true);
    expect(routeTable.node.defaultChild instanceof ec2.CfnRouteTable).toBe(true);

    const template = Template.fromStack(stack);

    template.resourceCountIs('AWS::EC2::RouteTable', 1);
    template.resourcePropertiesCountIs('AWS::EC2::RouteTable', {
      VpcId: vpc.vpcId,
    }, 1);
  });

  test('import from route table ID', () => {
    const routeTableId = 'rtb-12345678';
    const routeTable = RouteTable.fromRouteTableId(stack, 'RouteTable', routeTableId);

    expect(RouteTable.isRouteTable(routeTable)).toBe(false);
    expect(routeTable.routeTableId).toBe(routeTableId);

    const template = Template.fromStack(stack);

    template.resourceCountIs('AWS::EC2::RouteTable', 0);
  });
});

describe('RouteTable.addRoute method', () => {
  let stack: core.Stack;
  let vpc: ec2.IVpc;

  beforeEach(() => {
    stack = new core.Stack();
    vpc = ec2.Vpc.fromVpcAttributes(stack, 'VPC', {
      vpcId: 'vpc-123456789abcdefgh',
      availabilityZones: ['us-east-1a'],
    });
  });

  describe('owned route table', () => {
    let routeTable: IRouteTable;

    beforeEach(() => {
      routeTable = new RouteTable(stack, 'RouteTable', {
        vpc,
      });
    });

    test('add IPv4 routes', () => {
      routeTable.addRoute('RouteDefault', {
        destination: Destination.ipv4(),
        target: Target.natGateway(publicNatGateway('nat-1')),
      });
      routeTable.addRoute('RouteCustom', {
        destination: Destination.ipv4('1.2.3.4/5'),
        target: Target.natGateway(publicNatGateway('nat-2')),
      });

      const template = Template.fromStack(stack);

      template.resourceCountIs('AWS::EC2::Route', 2);
      template.resourcePropertiesCountIs('AWS::EC2::Route', {
        DestinationCidrBlock: '0.0.0.0/0',
        NatGatewayId: 'nat-1',
        RouteTableId: { 'Fn::GetAtt': ['RouteTable82FB8FA6', 'RouteTableId'] },
      }, 1);
      template.resourcePropertiesCountIs('AWS::EC2::Route', {
        DestinationCidrBlock: '1.2.3.4/5',
        NatGatewayId: 'nat-2',
        RouteTableId: { 'Fn::GetAtt': ['RouteTable82FB8FA6', 'RouteTableId'] },
      }, 1);
    });

    test('add IPv6 routes', () => {
      routeTable.addRoute('RouteDefault', {
        destination: Destination.ipv6(),
        target: Target.natGateway(publicNatGateway('nat-1')),
      });
      routeTable.addRoute('RouteCustom', {
        destination: Destination.ipv6('2001:db8:1234:5678::/64'),
        target: Target.natGateway(publicNatGateway('nat-2')),
      });

      const template = Template.fromStack(stack);

      template.resourceCountIs('AWS::EC2::Route', 2);
      template.resourcePropertiesCountIs('AWS::EC2::Route', {
        DestinationIpv6CidrBlock: '::/0',
        NatGatewayId: 'nat-1',
        RouteTableId: { 'Fn::GetAtt': ['RouteTable82FB8FA6', 'RouteTableId'] },
      }, 1);
      template.resourcePropertiesCountIs('AWS::EC2::Route', {
        DestinationIpv6CidrBlock: '2001:db8:1234:5678::/64',
        NatGatewayId: 'nat-2',
        RouteTableId: { 'Fn::GetAtt': ['RouteTable82FB8FA6', 'RouteTableId'] },
      }, 1);
    });
  });

  describe('unowned route table', () => {
    const routeTableId = 'rtb-12345678';
    let routeTable: IRouteTable;

    beforeEach(() => {
      routeTable = RouteTable.fromRouteTableId(stack, 'RouteTable', routeTableId);
    });

    test('add routes', () => {
      routeTable.addRoute('RouteIpv4', {
        destination: Destination.ipv4(),
        target: Target.natGateway(publicNatGateway('nat-1')),
      });
      routeTable.addRoute('RouteIpv6', {
        destination: Destination.ipv6(),
        target: Target.natGateway(publicNatGateway('nat-2')),
      });

      const template = Template.fromStack(stack);

      template.resourceCountIs('AWS::EC2::RouteTable', 0);

      template.resourceCountIs('AWS::EC2::Route', 2);
      template.resourcePropertiesCountIs('AWS::EC2::Route', {
        DestinationCidrBlock: '0.0.0.0/0',
        NatGatewayId: 'nat-1',
        RouteTableId: routeTableId,
      }, 1);
      template.resourcePropertiesCountIs('AWS::EC2::Route', {
        DestinationIpv6CidrBlock: '::/0',
        NatGatewayId: 'nat-2',
        RouteTableId: routeTableId,
      }, 1);
    });
  });

  function publicNatGateway(natGatewayId: string) {
    return PublicNatGateway.fromNatGatewayId(stack, natGatewayId, natGatewayId);
  }
});
