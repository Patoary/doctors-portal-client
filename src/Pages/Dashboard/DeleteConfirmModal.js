import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deletingDoctor, refetch, setDeletingDoctor}) => {
    const {name, email} = deletingDoctor;

    const handleDelete = () =>{
        fetch(`https://tranquil-headland-79943.herokuapp.com/doctor/${email}`,{
            method: 'DELETE',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                toast.success(`Doctor: ${name} is deleted.`)
                setDeletingDoctor(null)
                refetch();
            }
        
        })
    };
    return (
        <div>
            
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete <span className='text-red-900'>{name}</span></h3>
                    <div class="modal-action">
                    <button
                 className='btn btn-xs btn-error'onClick={()=>handleDelete()}>Delete</button>
                 
                        <label for="delete-confirm-modal" class="btn btn-xs btn-error">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;