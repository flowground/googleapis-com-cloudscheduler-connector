# ![LOGO](logo.png) Cloud Scheduler **flow**ground Connector

## Description

A generated **flow**ground connector for the Cloud Scheduler API (version v1beta1).

Generated from: https://api.apis.guru/v2/specs/googleapis.com/cloudscheduler/v1beta1/swagger.json<br/>
Generated at: 2019-05-07T17:41:20+03:00

## API Description

Creates and manages jobs run on a regular recurring schedule.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Deletes a job.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - Required.

The job name. For example:
`projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Gets a job.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - Required.

The job name. For example:
`projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Updates a job.<br/>
> <br/>
> If successful, the updated Job is returned. If the job does<br/>
> not exist, `NOT_FOUND` is returned.<br/>
> <br/>
> If UpdateJob does not successfully return, it is possible for the<br/>
> job to be in an Job.State.UPDATE_FAILED state. A job in this state may<br/>
> not be executed. If this happens, retry the UpdateJob request<br/>
> until a successful response is received.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - Optionally caller-specified in CreateJob, after
which it becomes output only.

The job name. For example:
`projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.

* `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]),
   hyphens (-), colons (:), or periods (.).
   For more information, see
   [Identifying
   projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
* `LOCATION_ID` is the canonical ID for the job's location.
   The list of available locations can be obtained by calling
   ListLocations.
   For more information, see https://cloud.google.com/about/locations/.
* `JOB_ID` can contain only letters ([A-Za-z]), numbers ([0-9]),
   hyphens (-), or underscores (_). The maximum length is 500 characters.
* `updateMask` - _optional_ - A  mask used to specify which fields of the job are being updated.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Lists information about the supported locations for this service.

*Tags:* `projects`

#### Input Parameters
* `filter` - _optional_ - The standard list filter.
* `name` - _required_ - The resource that owns the locations collection, if applicable.
* `pageSize` - _optional_ - The standard list page size.
* `pageToken` - _optional_ - The standard list page token.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Pauses a job.<br/>
> <br/>
> If a job is paused then the system will stop executing the job<br/>
> until it is re-enabled via ResumeJob. The<br/>
> state of the job is stored in state; if paused it<br/>
> will be set to Job.State.PAUSED. A job must be in Job.State.ENABLED<br/>
> to be paused.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - Required.

The job name. For example:
`projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Resume a job.<br/>
> <br/>
> This method reenables a job after it has been Job.State.PAUSED. The<br/>
> state of a job is stored in Job.state; after calling this method it<br/>
> will be set to Job.State.ENABLED. A job must be in<br/>
> Job.State.PAUSED to be resumed.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - Required.

The job name. For example:
`projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Forces a job to run now.<br/>
> <br/>
> When this method is called, Cloud Scheduler will dispatch the job, even<br/>
> if the job is already running.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - Required.

The job name. For example:
`projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Lists jobs.

*Tags:* `projects`

#### Input Parameters
* `pageSize` - _optional_ - Requested page size.

The maximum page size is 500. If unspecified, the page size will
be the maximum. Fewer jobs than requested might be returned,
even if more jobs exist; use next_page_token to determine if more
jobs exist.
* `pageToken` - _optional_ - A token identifying a page of results the server will return. To
request the first page results, page_token must be empty. To
request the next page of results, page_token must be the value of
next_page_token returned from
the previous call to ListJobs. It is an error to
switch the value of filter or
order_by while iterating through pages.
* `parent` - _required_ - Required.

The location name. For example:
`projects/PROJECT_ID/locations/LOCATION_ID`.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Creates a job.

*Tags:* `projects`

#### Input Parameters
* `parent` - _required_ - Required.

The location name. For example:
`projects/PROJECT_ID/locations/LOCATION_ID`.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

## License

**flow**ground :- Telekom iPaaS / googleapis-com-cloudscheduler-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
