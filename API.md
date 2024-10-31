# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultPublicNatGateway <a name="DefaultPublicNatGateway" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway"></a>

A default public NAT gateway.

#### Initializers <a name="Initializers" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.Initializer"></a>

```typescript
import { DefaultPublicNatGateway } from '@ogis-rd/awscdk-nat-lib'

new DefaultPublicNatGateway(scope: Construct, id: string, props: DefaultPublicNatGatewayProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.Initializer.parameter.props">props</a></code> | <code><a href="#@ogis-rd/awscdk-nat-lib.DefaultPublicNatGatewayProps">DefaultPublicNatGatewayProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.Initializer.parameter.props"></a>

- *Type:* <a href="#@ogis-rd/awscdk-nat-lib.DefaultPublicNatGatewayProps">DefaultPublicNatGatewayProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.fromNatGatewayId">fromNatGatewayId</a></code> | Import an unowned public NAT gateway from its ID. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.isPublicNatGateway">isPublicNatGateway</a></code> | Return true if the object is a PublicNatGateway. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.isDefaultPublicNatGateway">isDefaultPublicNatGateway</a></code> | Return true if the object is a DefaultPublicNatGateway. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.isConstruct"></a>

```typescript
import { DefaultPublicNatGateway } from '@ogis-rd/awscdk-nat-lib'

DefaultPublicNatGateway.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.isOwnedResource"></a>

```typescript
import { DefaultPublicNatGateway } from '@ogis-rd/awscdk-nat-lib'

DefaultPublicNatGateway.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.isResource"></a>

```typescript
import { DefaultPublicNatGateway } from '@ogis-rd/awscdk-nat-lib'

DefaultPublicNatGateway.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromNatGatewayId` <a name="fromNatGatewayId" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.fromNatGatewayId"></a>

```typescript
import { DefaultPublicNatGateway } from '@ogis-rd/awscdk-nat-lib'

DefaultPublicNatGateway.fromNatGatewayId(scope: Construct, id: string, natGatewayId: string)
```

Import an unowned public NAT gateway from its ID.

###### `scope`<sup>Required</sup> <a name="scope" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.fromNatGatewayId.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.fromNatGatewayId.parameter.id"></a>

- *Type:* string

---

###### `natGatewayId`<sup>Required</sup> <a name="natGatewayId" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.fromNatGatewayId.parameter.natGatewayId"></a>

- *Type:* string

---

##### `isPublicNatGateway` <a name="isPublicNatGateway" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.isPublicNatGateway"></a>

```typescript
import { DefaultPublicNatGateway } from '@ogis-rd/awscdk-nat-lib'

DefaultPublicNatGateway.isPublicNatGateway(x: any)
```

Return true if the object is a PublicNatGateway.

###### `x`<sup>Required</sup> <a name="x" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.isPublicNatGateway.parameter.x"></a>

- *Type:* any

---

##### `isDefaultPublicNatGateway` <a name="isDefaultPublicNatGateway" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.isDefaultPublicNatGateway"></a>

```typescript
import { DefaultPublicNatGateway } from '@ogis-rd/awscdk-nat-lib'

DefaultPublicNatGateway.isDefaultPublicNatGateway(x: any)
```

Return true if the object is a DefaultPublicNatGateway.

###### `x`<sup>Required</sup> <a name="x" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.isDefaultPublicNatGateway.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.property.natGatewayId">natGatewayId</a></code> | <code>string</code> | The ID of the NAT gateway. |

---

##### `node`<sup>Required</sup> <a name="node" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `natGatewayId`<sup>Required</sup> <a name="natGatewayId" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway.property.natGatewayId"></a>

```typescript
public readonly natGatewayId: string;
```

- *Type:* string

The ID of the NAT gateway.

---


### Eip <a name="Eip" id="@ogis-rd/awscdk-nat-lib.Eip"></a>

- *Implements:* <a href="#@ogis-rd/awscdk-nat-lib.IEip">IEip</a>

An Elastic IP (EIP) address.

#### Initializers <a name="Initializers" id="@ogis-rd/awscdk-nat-lib.Eip.Initializer"></a>

```typescript
import { Eip } from '@ogis-rd/awscdk-nat-lib'

new Eip(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.Eip.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@ogis-rd/awscdk-nat-lib.Eip.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ogis-rd/awscdk-nat-lib.Eip.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@ogis-rd/awscdk-nat-lib.Eip.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.Eip.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.Eip.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@ogis-rd/awscdk-nat-lib.Eip.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@ogis-rd/awscdk-nat-lib.Eip.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@ogis-rd/awscdk-nat-lib.Eip.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.Eip.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.Eip.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.Eip.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.Eip.fromAllocationId">fromAllocationId</a></code> | Import an unowned EIP from allocation ID. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.Eip.fromEipAttributes">fromEipAttributes</a></code> | Import an unowned EIP from attributes. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.Eip.isEip">isEip</a></code> | Return true if the object is an EIP. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@ogis-rd/awscdk-nat-lib.Eip.isConstruct"></a>

```typescript
import { Eip } from '@ogis-rd/awscdk-nat-lib'

Eip.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@ogis-rd/awscdk-nat-lib.Eip.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@ogis-rd/awscdk-nat-lib.Eip.isOwnedResource"></a>

```typescript
import { Eip } from '@ogis-rd/awscdk-nat-lib'

Eip.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@ogis-rd/awscdk-nat-lib.Eip.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@ogis-rd/awscdk-nat-lib.Eip.isResource"></a>

```typescript
import { Eip } from '@ogis-rd/awscdk-nat-lib'

Eip.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@ogis-rd/awscdk-nat-lib.Eip.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromAllocationId` <a name="fromAllocationId" id="@ogis-rd/awscdk-nat-lib.Eip.fromAllocationId"></a>

```typescript
import { Eip } from '@ogis-rd/awscdk-nat-lib'

Eip.fromAllocationId(scope: Construct, id: string, allocationId: string)
```

Import an unowned EIP from allocation ID.

###### `scope`<sup>Required</sup> <a name="scope" id="@ogis-rd/awscdk-nat-lib.Eip.fromAllocationId.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@ogis-rd/awscdk-nat-lib.Eip.fromAllocationId.parameter.id"></a>

- *Type:* string

---

###### `allocationId`<sup>Required</sup> <a name="allocationId" id="@ogis-rd/awscdk-nat-lib.Eip.fromAllocationId.parameter.allocationId"></a>

- *Type:* string

---

##### `fromEipAttributes` <a name="fromEipAttributes" id="@ogis-rd/awscdk-nat-lib.Eip.fromEipAttributes"></a>

```typescript
import { Eip } from '@ogis-rd/awscdk-nat-lib'

Eip.fromEipAttributes(scope: Construct, id: string, attrs: EipAttributes)
```

Import an unowned EIP from attributes.

###### `scope`<sup>Required</sup> <a name="scope" id="@ogis-rd/awscdk-nat-lib.Eip.fromEipAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@ogis-rd/awscdk-nat-lib.Eip.fromEipAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@ogis-rd/awscdk-nat-lib.Eip.fromEipAttributes.parameter.attrs"></a>

- *Type:* <a href="#@ogis-rd/awscdk-nat-lib.EipAttributes">EipAttributes</a>

---

##### `isEip` <a name="isEip" id="@ogis-rd/awscdk-nat-lib.Eip.isEip"></a>

```typescript
import { Eip } from '@ogis-rd/awscdk-nat-lib'

Eip.isEip(x: any)
```

Return true if the object is an EIP.

###### `x`<sup>Required</sup> <a name="x" id="@ogis-rd/awscdk-nat-lib.Eip.isEip.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.Eip.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.Eip.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.Eip.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.Eip.property.eipAllocationId">eipAllocationId</a></code> | <code>string</code> | The allocation ID. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.Eip.property.eipPublicIp">eipPublicIp</a></code> | <code>string</code> | The Elastic IP address. |

---

##### `node`<sup>Required</sup> <a name="node" id="@ogis-rd/awscdk-nat-lib.Eip.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@ogis-rd/awscdk-nat-lib.Eip.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@ogis-rd/awscdk-nat-lib.Eip.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `eipAllocationId`<sup>Required</sup> <a name="eipAllocationId" id="@ogis-rd/awscdk-nat-lib.Eip.property.eipAllocationId"></a>

```typescript
public readonly eipAllocationId: string;
```

- *Type:* string

The allocation ID.

---

##### `eipPublicIp`<sup>Required</sup> <a name="eipPublicIp" id="@ogis-rd/awscdk-nat-lib.Eip.property.eipPublicIp"></a>

```typescript
public readonly eipPublicIp: string;
```

- *Type:* string

The Elastic IP address.

---


### PublicNatGateway <a name="PublicNatGateway" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway"></a>

- *Implements:* <a href="#@ogis-rd/awscdk-nat-lib.IPublicNatGateway">IPublicNatGateway</a>, <a href="#@ogis-rd/awscdk-nat-lib.INatGateway">INatGateway</a>

A public NAT gateway.

An EIP is automatically allocated to the NAT gateway by default.

#### Initializers <a name="Initializers" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway.Initializer"></a>

```typescript
import { PublicNatGateway } from '@ogis-rd/awscdk-nat-lib'

new PublicNatGateway(scope: Construct, id: string, props: PublicNatGatewayProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.PublicNatGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@ogis-rd/awscdk-nat-lib.PublicNatGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ogis-rd/awscdk-nat-lib.PublicNatGateway.Initializer.parameter.props">props</a></code> | <code><a href="#@ogis-rd/awscdk-nat-lib.PublicNatGatewayProps">PublicNatGatewayProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway.Initializer.parameter.props"></a>

- *Type:* <a href="#@ogis-rd/awscdk-nat-lib.PublicNatGatewayProps">PublicNatGatewayProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.PublicNatGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.PublicNatGateway.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.PublicNatGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.PublicNatGateway.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.PublicNatGateway.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.PublicNatGateway.fromNatGatewayId">fromNatGatewayId</a></code> | Import an unowned public NAT gateway from its ID. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.PublicNatGateway.isPublicNatGateway">isPublicNatGateway</a></code> | Return true if the object is a PublicNatGateway. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway.isConstruct"></a>

```typescript
import { PublicNatGateway } from '@ogis-rd/awscdk-nat-lib'

PublicNatGateway.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway.isOwnedResource"></a>

```typescript
import { PublicNatGateway } from '@ogis-rd/awscdk-nat-lib'

PublicNatGateway.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway.isResource"></a>

```typescript
import { PublicNatGateway } from '@ogis-rd/awscdk-nat-lib'

PublicNatGateway.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromNatGatewayId` <a name="fromNatGatewayId" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway.fromNatGatewayId"></a>

```typescript
import { PublicNatGateway } from '@ogis-rd/awscdk-nat-lib'

PublicNatGateway.fromNatGatewayId(scope: Construct, id: string, natGatewayId: string)
```

Import an unowned public NAT gateway from its ID.

###### `scope`<sup>Required</sup> <a name="scope" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway.fromNatGatewayId.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway.fromNatGatewayId.parameter.id"></a>

- *Type:* string

---

###### `natGatewayId`<sup>Required</sup> <a name="natGatewayId" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway.fromNatGatewayId.parameter.natGatewayId"></a>

- *Type:* string

---

##### `isPublicNatGateway` <a name="isPublicNatGateway" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway.isPublicNatGateway"></a>

```typescript
import { PublicNatGateway } from '@ogis-rd/awscdk-nat-lib'

PublicNatGateway.isPublicNatGateway(x: any)
```

Return true if the object is a PublicNatGateway.

###### `x`<sup>Required</sup> <a name="x" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway.isPublicNatGateway.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.PublicNatGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.PublicNatGateway.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.PublicNatGateway.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.PublicNatGateway.property.natGatewayId">natGatewayId</a></code> | <code>string</code> | The ID of the NAT gateway. |

---

##### `node`<sup>Required</sup> <a name="node" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `natGatewayId`<sup>Required</sup> <a name="natGatewayId" id="@ogis-rd/awscdk-nat-lib.PublicNatGateway.property.natGatewayId"></a>

```typescript
public readonly natGatewayId: string;
```

- *Type:* string

The ID of the NAT gateway.

---


### RouteTable <a name="RouteTable" id="@ogis-rd/awscdk-nat-lib.RouteTable"></a>

- *Implements:* <a href="#@ogis-rd/awscdk-nat-lib.IRouteTable">IRouteTable</a>

A route table.

#### Initializers <a name="Initializers" id="@ogis-rd/awscdk-nat-lib.RouteTable.Initializer"></a>

```typescript
import { RouteTable } from '@ogis-rd/awscdk-nat-lib'

new RouteTable(scope: Construct, id: string, props: RouteTableProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.RouteTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@ogis-rd/awscdk-nat-lib.RouteTable.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ogis-rd/awscdk-nat-lib.RouteTable.Initializer.parameter.props">props</a></code> | <code><a href="#@ogis-rd/awscdk-nat-lib.RouteTableProps">RouteTableProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ogis-rd/awscdk-nat-lib.RouteTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@ogis-rd/awscdk-nat-lib.RouteTable.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@ogis-rd/awscdk-nat-lib.RouteTable.Initializer.parameter.props"></a>

- *Type:* <a href="#@ogis-rd/awscdk-nat-lib.RouteTableProps">RouteTableProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.RouteTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.RouteTable.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.RouteTable.addRoute">addRoute</a></code> | Add a route to the route table. |

---

##### `toString` <a name="toString" id="@ogis-rd/awscdk-nat-lib.RouteTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@ogis-rd/awscdk-nat-lib.RouteTable.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@ogis-rd/awscdk-nat-lib.RouteTable.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addRoute` <a name="addRoute" id="@ogis-rd/awscdk-nat-lib.RouteTable.addRoute"></a>

```typescript
public addRoute(id: string, options: RouteOptions): void
```

Add a route to the route table.

###### `id`<sup>Required</sup> <a name="id" id="@ogis-rd/awscdk-nat-lib.RouteTable.addRoute.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="@ogis-rd/awscdk-nat-lib.RouteTable.addRoute.parameter.options"></a>

- *Type:* <a href="#@ogis-rd/awscdk-nat-lib.RouteOptions">RouteOptions</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.RouteTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.RouteTable.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.RouteTable.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.RouteTable.fromRouteTableId">fromRouteTableId</a></code> | Import an unowned route table from its ID. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.RouteTable.isRouteTable">isRouteTable</a></code> | Return true if the object is a RouteTable. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@ogis-rd/awscdk-nat-lib.RouteTable.isConstruct"></a>

```typescript
import { RouteTable } from '@ogis-rd/awscdk-nat-lib'

RouteTable.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@ogis-rd/awscdk-nat-lib.RouteTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@ogis-rd/awscdk-nat-lib.RouteTable.isOwnedResource"></a>

```typescript
import { RouteTable } from '@ogis-rd/awscdk-nat-lib'

RouteTable.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@ogis-rd/awscdk-nat-lib.RouteTable.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@ogis-rd/awscdk-nat-lib.RouteTable.isResource"></a>

```typescript
import { RouteTable } from '@ogis-rd/awscdk-nat-lib'

RouteTable.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@ogis-rd/awscdk-nat-lib.RouteTable.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromRouteTableId` <a name="fromRouteTableId" id="@ogis-rd/awscdk-nat-lib.RouteTable.fromRouteTableId"></a>

```typescript
import { RouteTable } from '@ogis-rd/awscdk-nat-lib'

RouteTable.fromRouteTableId(scope: Construct, id: string, routeTableId: string)
```

Import an unowned route table from its ID.

###### `scope`<sup>Required</sup> <a name="scope" id="@ogis-rd/awscdk-nat-lib.RouteTable.fromRouteTableId.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@ogis-rd/awscdk-nat-lib.RouteTable.fromRouteTableId.parameter.id"></a>

- *Type:* string

---

###### `routeTableId`<sup>Required</sup> <a name="routeTableId" id="@ogis-rd/awscdk-nat-lib.RouteTable.fromRouteTableId.parameter.routeTableId"></a>

- *Type:* string

---

##### `isRouteTable` <a name="isRouteTable" id="@ogis-rd/awscdk-nat-lib.RouteTable.isRouteTable"></a>

```typescript
import { RouteTable } from '@ogis-rd/awscdk-nat-lib'

RouteTable.isRouteTable(x: any)
```

Return true if the object is a RouteTable.

###### `x`<sup>Required</sup> <a name="x" id="@ogis-rd/awscdk-nat-lib.RouteTable.isRouteTable.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.RouteTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.RouteTable.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.RouteTable.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.RouteTable.property.routeTableId">routeTableId</a></code> | <code>string</code> | The ID of the route table. |

---

##### `node`<sup>Required</sup> <a name="node" id="@ogis-rd/awscdk-nat-lib.RouteTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@ogis-rd/awscdk-nat-lib.RouteTable.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@ogis-rd/awscdk-nat-lib.RouteTable.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `routeTableId`<sup>Required</sup> <a name="routeTableId" id="@ogis-rd/awscdk-nat-lib.RouteTable.property.routeTableId"></a>

```typescript
public readonly routeTableId: string;
```

- *Type:* string

The ID of the route table.

---


## Structs <a name="Structs" id="Structs"></a>

### DefaultPublicNatGatewayProps <a name="DefaultPublicNatGatewayProps" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGatewayProps"></a>

Properties for a default public NAT gateway.

#### Initializer <a name="Initializer" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGatewayProps.Initializer"></a>

```typescript
import { DefaultPublicNatGatewayProps } from '@ogis-rd/awscdk-nat-lib'

const defaultPublicNatGatewayProps: DefaultPublicNatGatewayProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.DefaultPublicNatGatewayProps.property.privateSubnets">privateSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.IPrivateSubnet[]</code> | Instances in these private subnets can connect to the internet through the NAT gateway. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.DefaultPublicNatGatewayProps.property.publicSubnet">publicSubnet</a></code> | <code>aws-cdk-lib.aws_ec2.IPublicSubnet</code> | The public subnet that the NAT gateway is in. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.DefaultPublicNatGatewayProps.property.eip">eip</a></code> | <code><a href="#@ogis-rd/awscdk-nat-lib.IEip">IEip</a></code> | The EIP associated with the NAT gateway. |

---

##### `privateSubnets`<sup>Required</sup> <a name="privateSubnets" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGatewayProps.property.privateSubnets"></a>

```typescript
public readonly privateSubnets: IPrivateSubnet[];
```

- *Type:* aws-cdk-lib.aws_ec2.IPrivateSubnet[]

Instances in these private subnets can connect to the internet through the NAT gateway.

---

##### `publicSubnet`<sup>Required</sup> <a name="publicSubnet" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGatewayProps.property.publicSubnet"></a>

```typescript
public readonly publicSubnet: IPublicSubnet;
```

- *Type:* aws-cdk-lib.aws_ec2.IPublicSubnet

The public subnet that the NAT gateway is in.

---

##### `eip`<sup>Optional</sup> <a name="eip" id="@ogis-rd/awscdk-nat-lib.DefaultPublicNatGatewayProps.property.eip"></a>

```typescript
public readonly eip: IEip;
```

- *Type:* <a href="#@ogis-rd/awscdk-nat-lib.IEip">IEip</a>
- *Default:* automatically allocated.

The EIP associated with the NAT gateway.

---

### EipAttributes <a name="EipAttributes" id="@ogis-rd/awscdk-nat-lib.EipAttributes"></a>

Attributes used to import an EIP.

#### Initializer <a name="Initializer" id="@ogis-rd/awscdk-nat-lib.EipAttributes.Initializer"></a>

```typescript
import { EipAttributes } from '@ogis-rd/awscdk-nat-lib'

const eipAttributes: EipAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.EipAttributes.property.eipAllocationId">eipAllocationId</a></code> | <code>string</code> | The allocation ID. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.EipAttributes.property.eipPublicIp">eipPublicIp</a></code> | <code>string</code> | The Elastic IP address. |

---

##### `eipAllocationId`<sup>Required</sup> <a name="eipAllocationId" id="@ogis-rd/awscdk-nat-lib.EipAttributes.property.eipAllocationId"></a>

```typescript
public readonly eipAllocationId: string;
```

- *Type:* string

The allocation ID.

---

##### `eipPublicIp`<sup>Required</sup> <a name="eipPublicIp" id="@ogis-rd/awscdk-nat-lib.EipAttributes.property.eipPublicIp"></a>

```typescript
public readonly eipPublicIp: string;
```

- *Type:* string

The Elastic IP address.

---

### PublicNatGatewayProps <a name="PublicNatGatewayProps" id="@ogis-rd/awscdk-nat-lib.PublicNatGatewayProps"></a>

Properties for a public NAT gateway.

#### Initializer <a name="Initializer" id="@ogis-rd/awscdk-nat-lib.PublicNatGatewayProps.Initializer"></a>

```typescript
import { PublicNatGatewayProps } from '@ogis-rd/awscdk-nat-lib'

const publicNatGatewayProps: PublicNatGatewayProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.PublicNatGatewayProps.property.publicSubnet">publicSubnet</a></code> | <code>aws-cdk-lib.aws_ec2.IPublicSubnet</code> | The public subnet that the NAT gateway is in. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.PublicNatGatewayProps.property.eip">eip</a></code> | <code><a href="#@ogis-rd/awscdk-nat-lib.IEip">IEip</a></code> | The EIP associated with the NAT gateway. |

---

##### `publicSubnet`<sup>Required</sup> <a name="publicSubnet" id="@ogis-rd/awscdk-nat-lib.PublicNatGatewayProps.property.publicSubnet"></a>

```typescript
public readonly publicSubnet: IPublicSubnet;
```

- *Type:* aws-cdk-lib.aws_ec2.IPublicSubnet

The public subnet that the NAT gateway is in.

---

##### `eip`<sup>Optional</sup> <a name="eip" id="@ogis-rd/awscdk-nat-lib.PublicNatGatewayProps.property.eip"></a>

```typescript
public readonly eip: IEip;
```

- *Type:* <a href="#@ogis-rd/awscdk-nat-lib.IEip">IEip</a>
- *Default:* automatically allocated.

The EIP associated with the NAT gateway.

---

### RouteOptions <a name="RouteOptions" id="@ogis-rd/awscdk-nat-lib.RouteOptions"></a>

Options for a route.

#### Initializer <a name="Initializer" id="@ogis-rd/awscdk-nat-lib.RouteOptions.Initializer"></a>

```typescript
import { RouteOptions } from '@ogis-rd/awscdk-nat-lib'

const routeOptions: RouteOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.RouteOptions.property.destination">destination</a></code> | <code><a href="#@ogis-rd/awscdk-nat-lib.Destination">Destination</a></code> | The destination of the route. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.RouteOptions.property.target">target</a></code> | <code><a href="#@ogis-rd/awscdk-nat-lib.Target">Target</a></code> | The target of the route. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@ogis-rd/awscdk-nat-lib.RouteOptions.property.destination"></a>

```typescript
public readonly destination: Destination;
```

- *Type:* <a href="#@ogis-rd/awscdk-nat-lib.Destination">Destination</a>

The destination of the route.

---

##### `target`<sup>Required</sup> <a name="target" id="@ogis-rd/awscdk-nat-lib.RouteOptions.property.target"></a>

```typescript
public readonly target: Target;
```

- *Type:* <a href="#@ogis-rd/awscdk-nat-lib.Target">Target</a>

The target of the route.

---

### RouteTableProps <a name="RouteTableProps" id="@ogis-rd/awscdk-nat-lib.RouteTableProps"></a>

Properties for a route table.

#### Initializer <a name="Initializer" id="@ogis-rd/awscdk-nat-lib.RouteTableProps.Initializer"></a>

```typescript
import { RouteTableProps } from '@ogis-rd/awscdk-nat-lib'

const routeTableProps: RouteTableProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.RouteTableProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC in which the route table is created. |

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@ogis-rd/awscdk-nat-lib.RouteTableProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC in which the route table is created.

---

## Classes <a name="Classes" id="Classes"></a>

### Destination <a name="Destination" id="@ogis-rd/awscdk-nat-lib.Destination"></a>

The range of destination IP addresses (CIDR).

#### Initializers <a name="Initializers" id="@ogis-rd/awscdk-nat-lib.Destination.Initializer"></a>

```typescript
import { Destination } from '@ogis-rd/awscdk-nat-lib'

new Destination()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.Destination.ipv4">ipv4</a></code> | Create an IPv4 destination. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.Destination.ipv6">ipv6</a></code> | Create an IPv6 destination. |

---

##### `ipv4` <a name="ipv4" id="@ogis-rd/awscdk-nat-lib.Destination.ipv4"></a>

```typescript
import { Destination } from '@ogis-rd/awscdk-nat-lib'

Destination.ipv4(cidrBlock?: string)
```

Create an IPv4 destination.

###### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@ogis-rd/awscdk-nat-lib.Destination.ipv4.parameter.cidrBlock"></a>

- *Type:* string

IPv4 destination CIDR (default '0.0.0.0/0').

---

##### `ipv6` <a name="ipv6" id="@ogis-rd/awscdk-nat-lib.Destination.ipv6"></a>

```typescript
import { Destination } from '@ogis-rd/awscdk-nat-lib'

Destination.ipv6(cidrBlock?: string)
```

Create an IPv6 destination.

###### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@ogis-rd/awscdk-nat-lib.Destination.ipv6.parameter.cidrBlock"></a>

- *Type:* string

IPv6 destination CIDR (default '::/0').

---



### Target <a name="Target" id="@ogis-rd/awscdk-nat-lib.Target"></a>

The target to send traffic.

#### Initializers <a name="Initializers" id="@ogis-rd/awscdk-nat-lib.Target.Initializer"></a>

```typescript
import { Target } from '@ogis-rd/awscdk-nat-lib'

new Target()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.Target.natGateway">natGateway</a></code> | Create a NAT gateway target. |

---

##### `natGateway` <a name="natGateway" id="@ogis-rd/awscdk-nat-lib.Target.natGateway"></a>

```typescript
import { Target } from '@ogis-rd/awscdk-nat-lib'

Target.natGateway(natGateway: INatGateway)
```

Create a NAT gateway target.

###### `natGateway`<sup>Required</sup> <a name="natGateway" id="@ogis-rd/awscdk-nat-lib.Target.natGateway.parameter.natGateway"></a>

- *Type:* <a href="#@ogis-rd/awscdk-nat-lib.INatGateway">INatGateway</a>

---



## Protocols <a name="Protocols" id="Protocols"></a>

### IEip <a name="IEip" id="@ogis-rd/awscdk-nat-lib.IEip"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@ogis-rd/awscdk-nat-lib.Eip">Eip</a>, <a href="#@ogis-rd/awscdk-nat-lib.IEip">IEip</a>

An Elastic IP (EIP) address.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.IEip.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.IEip.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.IEip.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.IEip.property.eipAllocationId">eipAllocationId</a></code> | <code>string</code> | The allocation ID. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.IEip.property.eipPublicIp">eipPublicIp</a></code> | <code>string</code> | The Elastic IP address. |

---

##### `node`<sup>Required</sup> <a name="node" id="@ogis-rd/awscdk-nat-lib.IEip.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@ogis-rd/awscdk-nat-lib.IEip.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@ogis-rd/awscdk-nat-lib.IEip.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `eipAllocationId`<sup>Required</sup> <a name="eipAllocationId" id="@ogis-rd/awscdk-nat-lib.IEip.property.eipAllocationId"></a>

```typescript
public readonly eipAllocationId: string;
```

- *Type:* string

The allocation ID.

---

##### `eipPublicIp`<sup>Required</sup> <a name="eipPublicIp" id="@ogis-rd/awscdk-nat-lib.IEip.property.eipPublicIp"></a>

```typescript
public readonly eipPublicIp: string;
```

- *Type:* string

The Elastic IP address.

---

### INatGateway <a name="INatGateway" id="@ogis-rd/awscdk-nat-lib.INatGateway"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway">DefaultPublicNatGateway</a>, <a href="#@ogis-rd/awscdk-nat-lib.PublicNatGateway">PublicNatGateway</a>, <a href="#@ogis-rd/awscdk-nat-lib.INatGateway">INatGateway</a>, <a href="#@ogis-rd/awscdk-nat-lib.IPublicNatGateway">IPublicNatGateway</a>

A NAT gateway.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.INatGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.INatGateway.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.INatGateway.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.INatGateway.property.natGatewayId">natGatewayId</a></code> | <code>string</code> | The ID of the NAT gateway. |

---

##### `node`<sup>Required</sup> <a name="node" id="@ogis-rd/awscdk-nat-lib.INatGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@ogis-rd/awscdk-nat-lib.INatGateway.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@ogis-rd/awscdk-nat-lib.INatGateway.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `natGatewayId`<sup>Required</sup> <a name="natGatewayId" id="@ogis-rd/awscdk-nat-lib.INatGateway.property.natGatewayId"></a>

```typescript
public readonly natGatewayId: string;
```

- *Type:* string

The ID of the NAT gateway.

---

### IPublicNatGateway <a name="IPublicNatGateway" id="@ogis-rd/awscdk-nat-lib.IPublicNatGateway"></a>

- *Extends:* <a href="#@ogis-rd/awscdk-nat-lib.INatGateway">INatGateway</a>

- *Implemented By:* <a href="#@ogis-rd/awscdk-nat-lib.DefaultPublicNatGateway">DefaultPublicNatGateway</a>, <a href="#@ogis-rd/awscdk-nat-lib.PublicNatGateway">PublicNatGateway</a>, <a href="#@ogis-rd/awscdk-nat-lib.IPublicNatGateway">IPublicNatGateway</a>

A public NAT gateway.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.IPublicNatGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.IPublicNatGateway.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.IPublicNatGateway.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.IPublicNatGateway.property.natGatewayId">natGatewayId</a></code> | <code>string</code> | The ID of the NAT gateway. |

---

##### `node`<sup>Required</sup> <a name="node" id="@ogis-rd/awscdk-nat-lib.IPublicNatGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@ogis-rd/awscdk-nat-lib.IPublicNatGateway.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@ogis-rd/awscdk-nat-lib.IPublicNatGateway.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `natGatewayId`<sup>Required</sup> <a name="natGatewayId" id="@ogis-rd/awscdk-nat-lib.IPublicNatGateway.property.natGatewayId"></a>

```typescript
public readonly natGatewayId: string;
```

- *Type:* string

The ID of the NAT gateway.

---

### IRouteTable <a name="IRouteTable" id="@ogis-rd/awscdk-nat-lib.IRouteTable"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@ogis-rd/awscdk-nat-lib.RouteTable">RouteTable</a>, <a href="#@ogis-rd/awscdk-nat-lib.IRouteTable">IRouteTable</a>

A route table.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.IRouteTable.addRoute">addRoute</a></code> | Add a route to the route table. |

---

##### `addRoute` <a name="addRoute" id="@ogis-rd/awscdk-nat-lib.IRouteTable.addRoute"></a>

```typescript
public addRoute(id: string, options: RouteOptions): void
```

Add a route to the route table.

###### `id`<sup>Required</sup> <a name="id" id="@ogis-rd/awscdk-nat-lib.IRouteTable.addRoute.parameter.id"></a>

- *Type:* string

Construct ID.

---

###### `options`<sup>Required</sup> <a name="options" id="@ogis-rd/awscdk-nat-lib.IRouteTable.addRoute.parameter.options"></a>

- *Type:* <a href="#@ogis-rd/awscdk-nat-lib.RouteOptions">RouteOptions</a>

Options for adding a route.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ogis-rd/awscdk-nat-lib.IRouteTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.IRouteTable.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.IRouteTable.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@ogis-rd/awscdk-nat-lib.IRouteTable.property.routeTableId">routeTableId</a></code> | <code>string</code> | The ID of the route table. |

---

##### `node`<sup>Required</sup> <a name="node" id="@ogis-rd/awscdk-nat-lib.IRouteTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@ogis-rd/awscdk-nat-lib.IRouteTable.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@ogis-rd/awscdk-nat-lib.IRouteTable.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `routeTableId`<sup>Required</sup> <a name="routeTableId" id="@ogis-rd/awscdk-nat-lib.IRouteTable.property.routeTableId"></a>

```typescript
public readonly routeTableId: string;
```

- *Type:* string

The ID of the route table.

---

