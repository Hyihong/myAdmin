     const fetchTabalData = (opts) =>{
          const _fetchInstance = fetch( 'https://randomuser.me/api?' + 'results=' + opts.data.results + '&page=' + opts.data.page,{
              method:'GET',

          })
          return _fetchInstance;
    }

    export default fetchTabalData ;