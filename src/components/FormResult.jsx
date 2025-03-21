import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";

function FormResult({ data, onReset }) {
  return (
    <div className="w-full p-6">
      <div className="bg-[#F1FDF4] p-4 flex flex-col gap-6 rounded-xl border border-[#b8f7d0] mb-6">
        <h3 className="text-lg font-medium text-green-800 flex items-center gap-2 mb-4">
          <IoMdCheckmarkCircleOutline size={32} />
          ส่งแบบฟอร์มสำเร็จ
        </h3>
        <div className="flex flex-row">
          <span className="w-1/3 text-sm font-medium text-gray-500">ชื่อ</span>
          <span className="w-2/3 text-sm">{data.name}</span>
        </div>
        <div className="flex flex-row">
          <span className="w-1/3 text-sm font-medium text-gray-500">อีเมล</span>
          <span className="w-2/3 text-sm">{data.email}</span>
        </div>
        <div className="flex flex-row">
          <span className="w-1/3 text-sm font-medium text-gray-500">หนังที่เลือก</span>
          <span className="w-2/3 text-[#7E22CE] text-sm">{data.favMovie}</span>
        </div>
        <hr />
        <div className="flex flex-col">
          <div className="w-full text-sm font-medium text-gray-500">ความคิดเห็น</div>
          <div className="w-full bg-[#F9FAFB] p-4 rounded-xl text-sm">{data.comment}</div>
        </div>
      </div>
      {/* Reset Btn */}
      <button class="w-full bg-black text-white rounded-md py-4 px- flex flex-row items-center justify-center gap-2" onClick={onReset}>
        <GrPowerReset /> ทำแบบสำรวจใหม่
      </button>
    </div>
  );
}

export default FormResult;
