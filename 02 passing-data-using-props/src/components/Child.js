//Author : Sampurna Atmaramani
//Resource Created on : 17th March 2023 
//YouTube Videos :- https://www.youtube.com/@techysam-bl9mk/videos
//YouTube Handle : TechySam


const Child = (father) => {
    return <>

        <h1>Passed as combined Props </h1>

        Proof : This message is coming from Child Component <br />

        Plain title : <b>{father.title}</b> <br />
        Object value 1 : <b>{father.obj.key}</b>  <br />
        Object value 2 : <b>{father.obj.key1}</b>
    </>
}

export default Child;


export const ChildDestructure = ({title, obj}) => {
    return <>

        <h1>Destructured  Props</h1>
        Proof : This message is coming from Child Component <br />

        Plain title : <b>{title}</b> <br />
        Object value 1 : <b>{obj.key}</b>  <br />
        Object value 2 : <b>{obj.key1}</b>
    </>
}


