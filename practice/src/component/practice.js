import  './Practice.css'
export function Identity(props)
 const {username,
     Village,
     bloodgroup,
     Gender,}=props
     
return(
     <div className="main">
          <div className="main2">
               <h3 className="username"></h3>
               <h2 className="village"></h2>
               <p className="bloodgroup"></p>
               <p className="gender"></p>

          </div>
     </div>
)


