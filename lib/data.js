var main_data = {
    "ROOM_1": {
        "name": "Castle hall",
        "actions": {
            "look": {
                "at": {
                    "room": {
                        "answer": "It looks like there is some large wardrobe in the corner.",
                    },
                    "myself": {
                        "answer": "Looking good today!"
                    }
                },
            },
            "say": {
                "answer": "%s"
            },
            "open": {
                "wardrobe": {
                    "answer": "Entering Narnia...",
                    "next": "ROOM_2"
                }
            }
        }
    },
    "ROOM_2": {
        "name": "Wardrobe",
        "actions": {
            "run": {
                "answer": "Probably a good idea",
                "next": "ROOM_1"
            }
        }
    }
};