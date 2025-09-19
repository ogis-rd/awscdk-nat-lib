import { awscdk, javascript } from 'projen';
import {
  contributorStatement,
  pullRequestTemplateContents,
} from './projenrc';

const jsiiVersion = '~5.8';

const project = new awscdk.AwsCdkConstructLibrary({
  name: '@ogis-rd/awscdk-nat-lib',
  description: 'AWS CDK constructs for NAT devices',

  depsUpgradeOptions: {
    signoff: false,
    workflowOptions: {
      schedule: javascript.UpgradeDependenciesSchedule.NEVER,
    },
  },
  githubOptions: {
    mergify: false,
    pullRequestLintOptions: {
      contributorStatement,
      semanticTitleOptions: {
        types: [
          'chore',
          'docs',
          'feat',
          'fix',
        ],
      },
    },
  },
  pullRequestTemplateContents,
  releaseTrigger: {
    isManual: false,
    isContinuous: false,
  },
  npmRegistryUrl: 'https://npm.pkg.github.com',

  // The first version using new L1 codegen <https://github.com/aws/aws-cdk/pull/26318>
  cdkVersion: '2.88.0',
  projenVersion: '0.90.6',

  jsiiVersion,
  typescriptVersion: jsiiVersion,

  packageManager: javascript.NodePackageManager.NPM,
  projenrcTs: true,

  repositoryUrl: 'https://github.com/ogis-rd/awscdk-nat-lib.git',
  defaultReleaseBranch: 'main',

  author: 'OGIS-RI Co.,Ltd.',
  authorAddress: 'https://www.ogis-ri.co.jp',
  authorOrganization: true,
});

project.synth();
