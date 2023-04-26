import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
const TextContent = () => {
  return (
    <div className="content">
      <div className="text-content">
        <div>ภาพยนตร์ รายการทีวี และความบันเทิงอีกมากมายแบบไม่จำกัด</div>
        <p>ดูได้ทุกที่ ทุกเวลา บนทุกอุปกรณ์</p>
      </div>
      <p>หากพร้อมรับชม ป้อนอีเมลเพื่อสร้างหรือเริ่มต้นการเป็นสมาชิกอีกครั้ง</p>
      <div className="action">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Emial Address"
            aria-label="Emial Address"
            aria-describedby="basic-addon1"
            className="input-email"
          />
          <Button className="btn-danger">เริ่มต้นใช้งาน</Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default TextContent;
