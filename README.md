

![preview](public/assets/preview.jpg)



## Quick start

- **Install:** `yarn install`
- **Start:** `yarn dev`
- **Build:** `yarn build` or `npm run dev`

## Engagement Management APIs Documentation
This document provides documentation for the Engagement Management APIs. These APIs are used for managing engagements in the system, including creating, retrieving, updating, and deleting engagements.

Base URL
The base URL for these APIs is /api/engagements.

1. Get all engagements
URL: /get-engagements
Method: GET
Description: Retrieves all engagements stored in the system.
Success Response:
  Code: 200 OK
  Content: Array of engagements.
Error Response:
  Code: 500 Internal Server Error
  Content: { message: "Internal Server Error" }

2. Create a new engagement
URL: /engagement
Method: POST
Description: Creates a new engagement.
Request Body: JSON object representing the new engagement.
Success Response:
  Code: 201 Created
  Content: JSON object representing the created engagement.
Error Response:
  Code: 400 Bad Request
  Content: { message: "Error message" }

3. Edit an existing engagement
URL: /engagement/:id
Method: PUT
Description: Edits an existing engagement specified by ID.
URL Parameters:
id: ID of the engagement to be edited.
Request Body: JSON object containing fields to be updated.
Success Response:
  Code: 200 OK
  Content: JSON object representing the updated engagement.
Error Response:
  Code: 404 Not Found
  Content: { message: "Engagement not found" }
  Code: 500 Internal Server Error
  Content: { message: "Internal Server Error" }

4. Delete an engagement
URL: /engagement/:id
Method: DELETE
Description: Deletes an existing engagement specified by ID.
URL Parameters:
id: ID of the engagement to be deleted.
Success Response:
  Code: 200 OK
  Content: { message: "Engagement deleted successfully" }
Error Response:
  Code: 404 Not Found
  Content: { message: "Engagement not found" }
  Code: 500 Internal Server Error
  Content: { message: "Internal Server Error" }
