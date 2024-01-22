import { awscdk, javascript } from 'projen';

const project = new awscdk.AwsCdkConstructLibrary({
  name: '@ogis-rd/awscdk-nat-lib',
  description: 'AWS CDK constructs for NAT devices',

  buildWorkflow: false,
  depsUpgradeOptions: {
    workflow: false,
  },
  githubOptions: {
    pullRequestLint: false,
  },
  pullRequestTemplate: false,
  releaseTrigger: {
    isManual: false,
    isContinuous: false,
  },
  npmRegistryUrl: 'https://npm.pkg.github.com',

  // The oldest version to import `aws-cdk-lib/core` for running `npm test`
  // See https://github.com/aws/aws-cdk/pull/24376
  cdkVersion: '2.73.0',
  jsiiVersion: '~5.0.0',

  packageManager: javascript.NodePackageManager.NPM,
  projenrcTs: true,

  repositoryUrl: 'https://github.com/ogis-rd/awscdk-nat-lib.git',
  defaultReleaseBranch: 'main',

  author: 'OGIS-RI Co.,Ltd.',
  authorAddress: 'https://www.ogis-ri.co.jp',
  authorOrganization: true,
});

project.synth();
