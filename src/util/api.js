const uris = {
    loginUrl : '/users/login',
    addCandidate : '/admin/add-candidate',
    getCandidates : '/admin/get-candidates',
    addElection : '/admin/add-election',
    getElections : '/admin/get-elections',
    getElection : '/admin/get-election',
};


const apiPathBuilder = (routeName,params) => {
    const baseRoute = uris[routeName];
    const Params = params? `/${params}` : '';

    const uri =  baseRoute + Params;
    console.log(uri);
    return uri
};

export default apiPathBuilder;