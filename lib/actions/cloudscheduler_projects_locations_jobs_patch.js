/**
 * Auto-generated action file for "Cloud Scheduler" API.
 *
 * Generated at: 2019-05-07T14:41:20.511Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-cloudscheduler-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'cloudscheduler.projects.locations.jobs.patch'
 * Endpoint Path: '/v1beta1/{name}'
 * Method: 'patch'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "name",
    "updateMask",
    "alt",
    "callback",
    "fields",
    "key",
    "oauth_token",
    "prettyPrint",
    "quotaUser",
    "uploadType",
    "upload_protocol"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "name": "name",
    "updateMask": "updateMask",
    "alt": "alt",
    "callback": "callback",
    "fields": "fields",
    "key": "key",
    "oauth_token": "oauth_token",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "uploadType": "uploadType",
    "upload_protocol": "upload_protocol",
    "host": "host",
    "instance": "instance",
    "service": "service",
    "version": "version",
    "appEngineRouting": "appEngineRouting",
    "body": "body",
    "headers": "headers",
    "httpMethod": "httpMethod",
    "relativeUri": "relativeUri",
    "appEngineHttpTarget": "appEngineHttpTarget",
    "description": "description",
    "uri": "uri",
    "httpTarget": "httpTarget",
    "lastAttemptTime": "lastAttemptTime",
    "attributes": "attributes",
    "data": "data",
    "topicName": "topicName",
    "pubsubTarget": "pubsubTarget",
    "maxBackoffDuration": "maxBackoffDuration",
    "maxDoublings": "maxDoublings",
    "maxRetryDuration": "maxRetryDuration",
    "minBackoffDuration": "minBackoffDuration",
    "retryCount": "retryCount",
    "retryConfig": "retryConfig",
    "schedule": "schedule",
    "scheduleTime": "scheduleTime",
    "state": "state",
    "code": "code",
    "details": "details",
    "message": "message",
    "status": "status",
    "timeZone": "timeZone",
    "userUpdateTime": "userUpdateTime",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'cloudscheduler.projects.locations.jobs.patch',
        pathName: '/v1beta1/{name}',
        method: 'patch',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}