

export const  indexController  = (req, res) => {
        res.render('index', { 
            title: 'Telemetricas App',
            host: 'http://localhost:3000'
        });        
    }


