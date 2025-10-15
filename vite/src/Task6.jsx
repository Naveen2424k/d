
export default  function Task6({name,dep,skills})
{
return(
    <>
            <h1>hi i am {name} from {dep}</h1>
            <ol>

                {skills.map((s,i)=>
                (
                    <li>{s} {i}</li>           

                    )
                )}
            </ol>
    
    </>
)
}