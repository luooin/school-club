const base = {
    get() {
        return {
            url : "http://localhost:8080/club/",
            name: "club",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/club/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园社团平台"
        } 
    }
}
export default base
