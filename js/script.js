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
        dNone: true,
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
        // Metodo che controlla l'uguaglianza 
        isActive(index) {
            return this.currentIndex === index ? true : false;
        },
        // Assegnazione del currentIntex
        indexAssignment(index) {
            this.currentIndex = index;
            this.setdNoneTrue()
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
        // Metodo che aggiunge un nuovo elemento all'array messages
        newMessageSent(contact) {
            if (!this.textMessage) return;

            const newObject = this.createNewObject(this.textMessage, 'sent')
            contact.messages = [...contact.messages, newObject];
            this.textMessage = '';
            // Funzione di risposta
            setTimeout(() => {
                const newObject = this.createNewObject('ok', 'received')
                contact.messages = [...contact.messages, newObject]
            }, 1000)
        },
        // Metodo utile per creare un nuovo oggetto
        createNewObject(text, status) {
            const newObject = {
                date: dayjs().format('HH:mm'),
                text,
                status
            }
            return newObject
        },
        // Metodo utile per il toogle sulla freccia
        removeClass(index) {
            if (this.currentMessage === index && this.dNone === false) return true
            else return false
        },
        // Assegnare il valore al currentMessage
        setCurrentMessage(index) {
            this.currentMessage = index;
            if (this.dNone === true) return this.dNone = false
            else return this.setdNoneTrue()
        },
        // Assegnare il valore false al dNone
        setdNoneTrue() {
            return this.dNone = true;
        },
        // Metodo per cancellare un messaggio
        deleteMessage(index) {
            this.contacts[this.currentIndex].messages.splice(index, 1)
        },

    },
});
