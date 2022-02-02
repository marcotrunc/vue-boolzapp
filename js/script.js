console.log('Vue OK!', Vue);

Vue.config.devtools = true;

dayjs.extend(dayjs_plugin_customParseFormat);


const root = new Vue({
    el: '#root',
    data: {
        currentIndex: 0,
        textMessage: '',
        search: '',
        currentMessage: 0,
        dNone: false,
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

    methods: {
        isActive(index) {
            return this.currentIndex === index ? true : false;
        },
        indexAssignment(index) {
            this.currentIndex = index;
        },


        // Metodo che mi permette di vedere se un contatto è in lista
        isVisible(contact) {
            if (this.search === '') {
                return true
            } else {
                const isIncludes = contact.name.toLowerCase().includes(this.search.toLowerCase())
                return contact.visible = (isIncludes) ? true : false;
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
        removeClass(index) {
            if (this.currentMessage === index && this.dNone === true) return true
            else return false

        },
        setCurrentMessage(index) {
            this.currentMessage = index;
            if (this.dNone === false) return this.dNone = true
            else this.dNone = false;

        },
        deleteMessage(index) {
            this.contacts[this.currentIndex].messages.splice(index, 1)
        },
    },
});
