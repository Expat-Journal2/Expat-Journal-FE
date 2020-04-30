import React,{useState} from "react"
import { Modal} from 'reactstrap';


function AllPostImageModal (props){

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    console.log("Image Modal",modal)

    return (
        <div >
            <img src={props.img} width={props.width} onClick={toggle} />       
            <Modal size="xl"  isOpen={modal} toggle={toggle} className="imageModal" >
                <div >
                    <img src={props.img} onClick={toggle} className="large-image"/>
                </div>
            </Modal>
        </div>
    )
}

export default AllPostImageModal