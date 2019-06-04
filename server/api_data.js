define({ "api": [
  {
    "type": "get",
    "url": "api/hobbies",
    "title": "Request for all specified hobbies",
    "name": "GetHobbies",
    "group": "Hobbies",
    "version": "0.0.0",
    "filename": "./routes/api/hobbies.js",
    "groupTitle": "Hobbies"
  },
  {
    "type": "get",
    "url": "api/personalities",
    "title": "Request for all specified personalities",
    "name": "GetPersonalities",
    "group": "Personalities",
    "version": "0.0.0",
    "filename": "./routes/api/personalities.js",
    "groupTitle": "Personalities"
  },
  {
    "type": "get",
    "url": "api/professions",
    "title": "Request for all specified professions",
    "name": "GetProfessions",
    "group": "Professions",
    "version": "0.0.0",
    "filename": "./routes/api/professions.js",
    "groupTitle": "Professions"
  },
  {
    "type": "post",
    "url": "api/profiles/preferences/add",
    "title": "Add new partner preference",
    "name": "AddPartnerPreference",
    "group": "Profiles",
    "permission": [
      {
        "name": "Private"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name to identify user partner profile preference</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>Partner sex - one of option from &quot;[MALE, FEMALE, OTHER]&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>Partner age between two number - &quot;{from: 20, to: 22}&quot; (stringified)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Partner location</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "motivation",
            "description": "<p>Partner motivation to looking for somebody - one of option &quot;['BORED', 'FRIENDS', 'LOVE', 'JUST_CHAT', 'OTHER']&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "maritalStatus",
            "description": "<p>Partner mariatal status - one of option &quot;['SINGLE', 'DIVORCED', 'MARRIED', 'WIDOWED', 'SEPARATED', 'ENGAGED', 'HAVE_PARTNER']&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "personality",
            "description": "<p>Partner personality name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "profession",
            "description": "<p>Partner profession name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hobbies",
            "description": "<p>Partner hobbies name separated by comma for example &quot;Archery, Animation&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "precedence",
            "description": "<p>Define traits precedence stringify { profileTraitName: { type: String, }, precedence: { type: Number, }, isRequired: { type: Boolean, } }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/profiles.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "post",
    "url": "api/profiles/preferences/:name/delete",
    "title": "Delete partner preference with name from param",
    "name": "DeletePartnerPreference",
    "group": "Profiles",
    "permission": [
      {
        "name": "Private"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Partner profile name</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/profiles.js",
    "groupTitle": "Profiles"
  },
  {
    "type": "post",
    "url": "api/profiles/edit",
    "title": "Edit current user profile",
    "name": "EditCurrentUserProfile_or_create_one",
    "group": "Profiles",
    "permission": [
      {
        "name": "Private"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "handle",
            "description": "<p>Handle to user profile</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>User sex - one of option from &quot;[MALE, FEMALE, OTHER]&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>User age</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>User location</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "motivation",
            "description": "<p>User motivation - one of option &quot;['BORED', 'FRIENDS', 'LOVE', 'JUST_CHAT', 'OTHER']&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "maritalStatus",
            "description": "<p>User mariatal status - one of option &quot;['SINGLE', 'DIVORCED', 'MARRIED', 'WIDOWED', 'SEPARATED', 'ENGAGED', 'HAVE_PARTNER']&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "personality",
            "description": "<p>User personality name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "profession",
            "description": "<p>User profession name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hobbies",
            "description": "<p>User hobbies name separated by comma for example &quot;Archery, Animation&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bio",
            "description": "<p>Description about user</p>"
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
    "url": "api/profiles/preferences",
    "title": "Request for all user partners profiles",
    "name": "GetAllPartnersProfiles",
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
    "url": "api/profiles/preferences/:name",
    "title": "Request for user partner profile with specific name from param",
    "name": "GetPartnerProfile",
    "group": "Profiles",
    "permission": [
      {
        "name": "Private"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Partner profile name</p>"
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
    "type": "post",
    "url": "api/search/conversation/new",
    "title": "Create new conversation",
    "name": "Create_new_conversation",
    "group": "Search",
    "permission": [
      {
        "name": "Private"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user1",
            "description": "<p>First user id in conversation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user2",
            "description": "<p>Second user id in conversation</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "post",
    "url": "api/search/conversation/messages",
    "title": "Get all messages from current conversation",
    "name": "Get_all_messages_from_current_conversation",
    "group": "Search",
    "permission": [
      {
        "name": "Private"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "conversationId",
            "description": "<p>Current conversation id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "post",
    "url": "api/search/conversation/message",
    "title": "Send message",
    "name": "Send_message",
    "group": "Search",
    "permission": [
      {
        "name": "Private"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Author name of message</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Content of message</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "conversationId",
            "description": "<p>Current conversation id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/api/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "post",
    "url": "api/users/delete",
    "title": "Delete account",
    "name": "DeleteAccount",
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
