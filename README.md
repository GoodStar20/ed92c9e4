## React AirCall App

The app will have two different components:

- **Activity Feed** - simple list of calls
- **Activity Detail** - detail of a call
- **Archive** - the final user should be able to archive (and unarchive) a call. Archived calls will no longer be displayed on the Activity Feed and should have a separate Archived Tab.

### Clone this repo

```bash
$ git clone https://github.com/GoodStar20/ed92c9e4.git
```

## Install dependencies

```
yarn install
yarn start
```

## API documentation

### Routes

Here is the base URL of the API: https://aircall-backend.onrender.com

- **GET** - BASE_URL/activities: get calls to display in the Activity Feed
- **GET** - BASE_URL/activities/<call_id> retrieve a specific call details
- **PATCH** - BASE_URL/activities/<call_id> update a call. The only field updatable is is_archived (bool). You'll need to send a JSON in the request body:

```
{
  is_archived: true
}
```

- **PATCH** - BASE_URL/reset: Reset all calls to initial state (usefull if you archived all calls).

### Screenshots
