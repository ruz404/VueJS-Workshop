const app = Vue.createApp({
    data(){
        return{
            firstName: 'Nancy',
            lastName: 'Cruz',
            email: 'nancy.cruz@udem.edu',
            gender: 'female',
            picture: 'https://randomuser.me/api/portraits/women/75.jpg',
        }
    },
    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api');
            const { results } = await res.json();

            console.log(results);

            // console.log(this.firstName);
            this.firstName = results[0].name.first;
            this.lastName = results[0].name.last;
            this.email =results[0].email;
            this.gender = results[0].gender;
            this.picture = results[0].picture.large;
        }
    }
})

app.mount('#app')