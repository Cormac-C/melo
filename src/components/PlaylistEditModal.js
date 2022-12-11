import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function PlaylistEditModal({ onClose, onSave, children, heading="Edit Playlist Details" }) {
    const [title, setTitle] = useState("");

    const onKeyPress = (e) => {
      const val = e.target.value;
      setTitle(val);

      if(e.key === 'Enter'){
        e.preventDefault();
        onSave(val);
        onClose();
      }
    }
  
    return (
      <div className="
        fixed w-screen h-screen left-0 top-0 m-0 z-30
        bg-black/50 flex justify-center items-center"
        onClick={onClose}
      >
        <div className="bg-zinc-800 p-8 space-y-6 min-w-[30%]" onClick={(e) => e.stopPropagation()}>
          <h2>{heading}</h2>
          <Form>
            <h6>Playlist Title</h6>
            <Form.Control
              type="text"
              className="!rounded !bg-zinc-200 !border-none"
              aria-label="Playlist Title"
              onKeyUp={onKeyPress}
            />
          </Form>
          <div className="flex justify-between pt-4">
            <button
              className="rounded-full border px-3 py-1 border-purple-light bg-transparent"
              onClick={onClose}
            >
              CANCEL
            </button>
            <button
              className="rounded-full border px-3 py-1 border-purple-light bg-transparent"
              onClick={() => {onSave(title); onClose()}}
            >
              SAVE CHANGES
            </button>
          </div>
          {children}
        </div>
      </div>
    );
  }