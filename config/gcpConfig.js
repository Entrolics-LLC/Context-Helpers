const scheduler = require('@google-cloud/scheduler')
const { DocumentProcessorServiceClient } = require('@google-cloud/documentai').v1beta3
const { WorkflowsClient, ExecutionsClient } = require('@google-cloud/workflows')
const Vision = require('@google-cloud/vision')

let projectId, workFlowClient, flowExecutionClient, visionClient, DocAIclient, client

const gcpConfigInit = (service_key) => {
    projectId = service_key.project_id

    workFlowClient = new WorkflowsClient({
        projectId,
        credentials: service_key
    })

    flowExecutionClient = new ExecutionsClient({
        projectId,
        credentials: service_key
    })

    visionClient = new Vision.ImageAnnotatorClient({
        projectId,
        credentials: service_key
    })

    DocAIclient = new DocumentProcessorServiceClient({
        projectId,
        credentials: service_key
    })

    client = new scheduler.CloudSchedulerClient({
        projectId,
        credentials: service_key
    })
}


module.exports = {
    gcpConfigInit,
    projectId,
    workFlowClient,
    flowExecutionClient,
    visionClient,
    DocAIclient,
    client
}