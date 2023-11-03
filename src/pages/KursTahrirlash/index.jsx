import { useState } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { BiSolidPlusSquare } from "react-icons/bi";
const index = () => {
  const [openModal, setOpenModal] = useState();


  const props = { openModal, setOpenModal };

   
  
  return (
    <div>
      <Button onClick={() => props.setOpenModal("form-elements")}>
        Toggle modal
      </Button>
      <Modal
        show={props.openModal === "form-elements"}
        size="4xl"
        popup
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Body>
          <div className="space-y-6">
            <div className="mt-[20px] flex items-center justify-between border-b">
              <h3 className="text-xl   dark:text-white  text-blue-600 text-[20px] font-semibold">
                Kursni tahrirlash
              </h3>
              <Modal.Header />
            </div>
            <div className="mb-2 block">
              <Label
                HtmlFor="kurs"
                value="Kurs rasmi"
                className="text-blue-600 text-[20px] font-semibold"
              />
            </div>
            <div>
              <div className="w-full border rounded-md mb-[20px]">
                <button className="px-5 py-4 active:bg-gray-300">
                  Choosen file
                </button>
                <button className="px-5 py-4 active:bg-gray-300">
                  No choosen file
                </button>
              </div>

              <div className="mb-2 block">
                <Label
                  HtmlFor="kurs"
                  value="Kurs nomi"
                  className="text-blue-600 text-[20px] font-semibold"
                />
              </div>
              <TextInput id="text" placeholder="Kurs nomi" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  HtmlFor="text"
                  value="Kurs haqida"
                  className="text-blue-600 text-[20px] font-semibold"
                />
              </div>
              <textArea
                className="w-full"
                placeholder="Mahsulotlar mutahaisilar nimadurlar kijmdiurlak"
              ></textArea>
            </div>
            <div className="py-4 border-b">
              <BiSolidPlusSquare className="text-[30px] text-blue-500 " />
            </div>
            <div className="flex items-center justify-between">
              <span></span>
              <Button onClick={() => props.setOpenModal(undefined)}>
                Close
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default index;
