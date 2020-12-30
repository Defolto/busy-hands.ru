class User{
    constructor(object){
        this.name = object.name;
        this.img = object.img;
        this.company = object.company;
        this.chats = object.chats;
        this.email = object.email;
    }

    getUsersChats(yourEmail){
        let lastMessage = 'Сообщения нет';
        this.chats.forEach(element => {
            if (element.email == yourEmail) {
                lastMessage = element.story[element.story.length - 1].text
            }
        });
        return {
            img: this.img,
            name: this.name,
            lastMessage: lastMessage,
            email: this.email
        }
    }
}

module.exports = User