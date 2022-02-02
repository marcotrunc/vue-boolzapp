console.log('Vue OK!', Vue);

Vue.config.devtools = true;

dayjs.extend(dayjs_plugin_customParseFormat);


const root = new Vue({
    el: '#root',
    data: {
        currentIndex: 0,
        textMessage: '',
        search: '',
        user: {
            name: 'Marco',
            avatar: '_2',
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Alessia',
                avatar: '_io',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
        ],
    },
    // computed: {
    //     // Metodo che mi cambia la visibilità
    //     filteredContacts() {
    //         return this.contacts.filter(contact => {
    //             return contact.name.toLowerCase().includes(this.search.toLowerCase())
    //         });
    //     },
    // },


    methods: {
        isActive(index) {
            return this.currentIndex === index ? true : false;
        },
        indexAssignment(index) {
            this.currentIndex = index;
        },
        isReceived(messageStatus) {
            return messageStatus === 'received' ? 'received-message' : 'send-message'
        },
        isSent(message) {
            return message.status === 'sent' ? 'flex-end' : 'flex-start'
        },

        // Metodo che mi permette di vedere se un contatto è visibile
        isVisible(index) {
            if (this.contacts[index].visible === true) return true
            else false
        },

        filterArray() {
            if (!search) return this.contacts
            else return this.contacts.filter(contact => {
                const isIncludes = contact.name.toLowerCase().includes(this.search.toLowerCase())
                contact.visible = (isIncludes) ? true : false;
            })
        }
    },

    newMessageSent(contact) {
        if (!this.textMessage) return;
        const newObjectSent = {
            date: dayjs().format('HH:mm'),
            text: this.textMessage,
            status: 'sent',
        }
        contact.messages = [...contact.messages, newObjectSent];
        this.textMessage = '';

        setTimeout(() => {
            const newObjectreceived = {
                date: dayjs().format('HH:mm'),
                text: 'ok',
                status: 'received',
            }

            contact.messages = [...contact.messages, newObjectreceived]
        }, 1000)
    },
});
