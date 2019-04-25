define({ "api": [
  {
    "type": "post",
    "url": "api/profiles/edit",
    "title": "Edit current user profile",
    "name": "EditCurrentUserProfile",
    "group": "Profiles",
    "permission": [
      {
        "name": "Private"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/api/profiles.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "get",
    "url": "api/profiles/all",
    "title": "Get all profiles",
    "name": "GetAllProfiles",
    "group": "Profiles",
    "permission": [
      {
        "name": "Public"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/api/profiles.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "get",
    "url": "api/profiles",
    "title": "Get current user profile",
    "name": "GetCurrentUserProfile",
    "group": "Profiles",
    "permission": [
      {
        "name": "Private"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/api/profiles.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "get",
    "url": "api/profiles/user/:user_id",
    "title": "Get profile of specific user",
    "name": "GetUserProfile",
    "group": "Profiles",
    "permission": [
      {
        "name": "Public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Unique user id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/profiles.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "get",
    "url": "api/users/current",
    "title": "Get current user data",
    "name": "GetCurrentUser",
    "group": "Users",
    "permission": [
      {
        "name": "Private"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/api/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "api/users/register",
    "title": "Register",
    "name": "RegisterUser",
    "group": "Users",
    "permission": [
      {
        "name": "Public"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/api/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/api/users/login",
    "title": "Login",
    "name": "UserLogin",
    "group": "Users",
    "permission": [
      {
        "name": "Public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/users.js",
    "groupTitle": "Users"
  }
] });
