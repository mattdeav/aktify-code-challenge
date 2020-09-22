# Aktify Code User Stories

Please complete the assigned user story in a fork of this repository. Create a PR against [aktify-code-challenge](https://github.com/aktify/aktify-code-challenge) when you're finished.


### #1 Campaign Creation


#### Story

_As a user, I want to create a campaign in the UI, so that I don't have to create it manually in the database._


#### Description

Users should be able to create a campaign from the UI. The UI should have a campaign form with the following fields:

- **Name** _(textfield)_ The name of the campaign
- **Description** _(textarea)_ A description of the purpose of the campaign
- **Active** _(checkbox)_ Is the campaign active?

The form should should have two buttons.

The first button should be labelled "Cancel". Clicking "Cancel" should return the user to the previous route or context and resets the form. _Clicking this button does not create a new campaign._

The second button should be labelled "Create". Clicking "Create" should make a POST request to a new API endpoint at `/campaigns/` with the form information. If the request is successful, the user should be redirected to the new campaign's details view at `/campaigns/:id`.


##### Required features

- [UI] Add a route or modal to display the campaign form and a link or button to navigate to that view
- [UI] Create a campaign form
- [API] Add a POST route, called `create`, to the Campaign blueprint for creating a new campaign
- [API] Add the `description` and `is_active` columns to the Campaign table
- [UI] Connect the form and the API using [Apollo Link REST](https://www.apollographql.com/docs/link/links/rest/) (_NOTE: Apollo Client and Apollo Link REST are already configured in the UI)_.


##### Acceptance criteria

- User can navigate to the form from the Campaigns view
- Form has three fields as described above.
- Form has two buttons that behave as described above.