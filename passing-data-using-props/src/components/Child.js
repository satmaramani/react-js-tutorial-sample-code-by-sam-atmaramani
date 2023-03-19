//Author : Sampurna Atmaramani
//Resource Created on : 17th March 2023 
//YouTube Videos :- https://www.youtube.com/@techysam-bl9mk/videos


const Child = (props) => {
    return <>
        Proof : This message is coming from Child Component <br />

        Plain title : {props.title} <br />
        Object value 1 : {props.obj.key}  <br />
        Object value 2 : {props.obj.key1}
    </>
}

export default Child;