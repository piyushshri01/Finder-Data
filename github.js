class Github {
    constructor() {
        this.client_id = 'b8a2ed3037ad2f998c39';
        this.client_secret = '621f8add3522932cb557c3fffed800630b267caa';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos  = await repoResponse.json();

        return {
           profile ,
           repos
        }
    }
}

