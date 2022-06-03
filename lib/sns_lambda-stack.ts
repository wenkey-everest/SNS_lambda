import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as sns from "aws-cdk-lib/aws-sns";
import * as lambda from "aws-cdk-lib/aws-lambda";

export class SnsLambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const topic = new sns.Topic(this, "newTopic", {
      displayName: "New Topic",
    });

    const snsTriggeredLambda = new lambda.Function(this, "snsTriggeredLambda", {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset("src"),
      handler: "index.handler",
      functionName: "snsTriggeredLambda",
    });
  }
}
