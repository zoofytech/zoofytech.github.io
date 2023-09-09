---
layout: table
title: AWS
---

# AWS
This page will go over all of the core services within AWS.

# alb
# amis
# api-gateway
# auto-scaling
# batch
# certificate-manager
# clb
# cloudfront
# cloudformation
# cloudwatch
# device-farm
# directconnect
# dynamodb
# ebs
# ec2
# ecs
# eks
# efs 
# elastic-beanstalk
# elastic-ips
# elasticache
# emr
# fargate
# glacier
# iot
# kinesis-firehose
# kinesis-streams
# kms
# lambda
# load-balancers
# mobile-hub
# opsworks
# quicksight
# rds
# rds-aurora 
# rds-aurora-mysql
# rds-aurora-postgresql
# rds-mysql-and-mariadb
# rds-postgresql
# rds-sql-server
# redshift
# route-53
# s3
# security-and-iam
# ses
# sns
# sqs
# step-functions
# waf
# vpcs-network-security-and-security-groups



# SAA
## Intro

### Animals 4life
Company intro:
- on-prem failing hardware
- AWS/Azure Pilots are messing and not best practice
- Lack of HA and scalability
- Concerns of cost new infra 
Ideals:
- Fast performance for all field workers
- new regions quickly when required
- Automation - low base staff costing
- Agility- need ot spin up new marketing campaigns, social and process applications(IOT,Big Data etc)

## AWS Accounts
- Accounts / Root user
- IAM 

### Create accounts , MFA , IAM, CLI
- management account zoofytech+1@gmail.com zoofytech-management
-  production:  zoofytech+2@gmail.com zoofytech-prod
- Add MFA
- Add Budget
- Avoid use of root user
- Create IAM user iamadmin
- Allow billing PDF under preferences
- Create zero budget
- alias for sign on - https://zoofytech-prod.signin.aws.amazon.com/console
- https://zoofytech-management.signin.aws.amazon.com/console
- Setup MFA for iamadmin 
- setup cli v2
- Max of two access keys per account
- deactivate create 
- aws configure --profile iamadmin-prod && aws configure --profile iamadmin-management


## AWS Fundamentals 
### Public vs Private Services
By default, all resources have permissions not allowing access
- Public: S3
- Private: VPC

### Zones:
- Private vs Public networks: Internet vs House network
- AWS Public Zones: S3
- VPCS - Isolated VPC private unless access allowed. Can allowed to private networks. Also can allow internet gateway, transit gateway to allow internet access. 

### AWS Global Infrastructure 
#### AWS Regions
- us-west-1 , us-west-2, us-east-1 etc..
- some services are global and do not have regions
- Separate geographic isolated fault domains
- Geopolitical separation - must follow laws and regulations within region
- allow region control duplicating infrastructure 
- region code, region names
-  availability zones: Have multiple within regions. Each one is isolated storage, networking ,power. Services can be distributed between separate AZ's. AZ's can be multiple data centers   

### AWS Edge Locations
- Useful for closer latency (Netflix)
- Less edge locations vs regions

## Service Resilience 
Global Resilient: Region can fail in multiple regions 
Region Resilient: Separate services within each region 
AZ Resilient: If AZ fails then service fails 