#! /bin/bash

npm install -g serverless
mkdir -p target/stg
mkdir target/prod
serverless deploy --stage $env --package $CODEBUILD_SRC_DIR/target/$env -v -r us-east-1
