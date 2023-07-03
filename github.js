
class Github{
    constructor(){
        this.client_id = 'c4d492e5cfc1e01243a2'
        this.client_secret ="d414d13189433ba07dc0d4455dd98288e1c97d60"
        this.repos_count = 10
        this.repos_sort = 'asc'
    }
 async getUser(user){
    // gelen userla beraber istek atma
   const profileResponse = await fetch(
    `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

   //  kullanıcının repolarını çekme
   const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
//    gelen cevabı jsona çevirme
   const profile = await  profileResponse.json()
   const repos = await repoResponse.json()
   console.log(repos)

// işlenmiş veriyi fonksiyonun çağrıldığı yere gönderme
   return {
      profile,
      repos,
   }
  }
}




export default Github 