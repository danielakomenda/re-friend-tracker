export class GuiModel {

    /* HINWEIS: Texte sind in der Datei ../example-translation-service.ts definiert.
    Erscheinen Texte in {}, so kann die Übersetzung in example-translation-service.ts definiert werden
    */

    private _guiModel = {
        "application": {
            "title": "Daniela's Friend Tracker",
            
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "orange",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": "fa-regular fa-map",
                            "color": "green",
                            "page": "locationspage",
                        },
                        {
                            "type": "button",
                            "name": "Groups",
                            "icon": "fa-weixin",
                            "color": "blue",
                            "page": "groupspage",
                        },
                        {
                            "type": "button",
                            "name": "Activity",
                            "icon": "fa-light fa-icons",
                            "color": "wisteria",
                            "page": "activitypage",
                        }
                    ]
                },
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "yellow",
                            "search": true,
                            "url": "/friend",
                            "page": "overviewFriend"
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "orange",
                            "width": 1,
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "backbutton",
                        },
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "list",
                            "icon": "fa-regular fa-map",
                            "color": "emerald",
                            "search": true,
                            "url": "/location",
                            "page": "overviewLocation"
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-regular fa-map",
                            "color": "green",
                            "width": 1,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "backbutton",
                        },
                    ]
                },
                {
                    "id": "groupspage",
                    "elementList": [
                        {
                            "type": "list",
                            "icon": "fa-weixin",
                            "color": "turquoise",
                            "search": true,
                            "url": "/group",
                            "form": {
                                "form": "GroupForm"
                            }
                        },
                        {
                            "type": "newButton",
                            "name": "NewGroup",
                            "icon": "fa-weixin",
                            "color": "blue",
                            "width": 1,
                            "form": {
                                "form": "GroupForm"
                            }
                        },
                        {
                            "type": "backbutton",
                        },
                    ]
                },
                {
                    "id": "activitypage",
                    "elementList": [
                        {
                            "type": "list",
                            "icon": "fa-regular fa-futbol",
                            "color": "pink",
                            "search": true,
                            "url": "/activity",
                            "page": "overviewActivity"
                        },
                        {
                            "type": "newButton",
                            "name": "NewActivity",
                            "icon": "fa-regular fa-futbol",
                            "color": "wisteria",
                            "width": 1,
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                        {
                            "type": "backbutton",
                        },
                    ]
                },
                {
                    "id": "overviewFriend",
                    "elementList": [
                        {
                            "type": "list",
                            "icon": "fa-weixin",
                            "color": "pink",
                            "search": true,
                            "url": "/friend/:friendKey/activity",
                        },
                        {
                            "type": "newButton",
                            "name": "AddActivity",
                            "icon": "fa-futbol",
                            "color": "wisteria",
                            "width": 2,
                            "form": {
                                "form": "AddActivityForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "EditFriend",
                            "icon": "fa-user",
                            "color": "orange",
                            "width": 1,
                            "form": {
                                "form": "FriendForm"
                            }
                        },
                        {
                            "type": "backbutton",
                        },
                    ]
                },
                {
                    "id": "overviewLocation",
                    "elementList": [
                        {
                            "type": "list",
                            "icon": "fa-weixin",
                            "color": "pink",
                            "search": true,
                            "url": "/location/:locationKey/activity",
                        },
                        {
                            "type": "button",
                            "name": "EditLocation",
                            "icon": "fa-weixin",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "backbutton",
                        },
                    ]
                },
                {
                    "id": "overviewActivity",
                    "elementList": [
                        {
                            "type": "list",
                            "icon": "fa-weixin",
                            "color": "yellow",
                            "search": true,
                            "url": "/activity/:activityKey/friend",
                        },
                        {
                            "type": "button",
                            "name": "EditActivity",
                            "icon": "fa-weixin",
                            "color": "wisteria",
                            "width": 2,
                            "form": {
                                "form": "ActivityForm"
                            }
                        },
                        {
                            "type": "backbutton",
                        },
                    ]
                },
            ],




            
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "url": "/friend",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "nickname",
                            "type": "text",
                            "name": "Nickname",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "birthdate",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },                       
                        {
                            "id": "group",
                            "type": "autocomplete",
                            "name": "Group",
                            "url": "/group",
                            "form": "GroupForm",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "url": "/location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "GroupForm",
                    "title": "Group",
                    "url": "/group",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "GroupName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "creation",
                            "type": "date",
                            "name": "CreationDate",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ActivityForm",
                    "title": "Activity",
                    "url": "/activity",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Activity",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "url": "/location",
                            "form": "LocationForm",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },               
                {
                    "id": "AddActivityForm",
                    "title": "Activity",
                    "url": "/friend/:friendKey/activity",
                    "formFieldList": [
                        {
                            "id":   "activity",
                            "type": "autocomplete",
                            "name": "Activity",
                            "url": "/activity",
                            "defaultKey": "activityKey",
                            "readonly": true,
                            "form": "ActivityForm",
                            "width": 2
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
            ],
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
