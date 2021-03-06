const uris = {
    loginUrl : '/users/login',
    addCandidate : '/admin/add-candidate',
    getCandidates : '/admin/get-candidates',
    addElection : '/admin/add-election',
    getElections : '/admin/get-elections',
    getElection : '/admin/get-election',
    addVoter : '/voter/add-voter',
    voterAuthentication : '/admin/voter-authentication',
    castVote : '/admin/cast-vote',
    getVoters : '/voter/get-voters',
    getEndElections : '/admin/get-end-elections'
};


const apiPathBuilder = (routeName,params) => {
    const baseRoute = uris[routeName];
    const Params = params? `/${params}` : '';
    return baseRoute + Params;
};

export default apiPathBuilder;