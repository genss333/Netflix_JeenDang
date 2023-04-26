import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import onAround from "/src/assets/landing_page_image/around.png";
import En from "/src/assets/landing_page_image/en.png";
import Kids from "/src/assets/landing_page_image/kids.png";
import onTV from "/src/assets/landing_page_image/onTV.png";

const BoxContent = () => {
  return (
    <Container fluid className="box-content">
      <Row>
        <Col className="box-grediant">
          <img src={onTV} alt="ontv" />
          <h3>รับชมได้ในทีวี</h3>
          <p>
            รับชมได้ในสมาร์ททีวี Playstation, Xbox, Chromecast, Apple TV
            เครื่องเล่น Blu-ray และอีกมากมาย
          </p>
        </Col>
        <Col className="box-grediant">
          <img src={onAround} alt="ontv" />
          <h3>รับชมได้ทุกที่</h3>
          <p>
            สตรีมภาพยนตร์และรายการทีวีได้ไม่จำกัดในโทรศัพท์ แท็บเล็ต แล็ปท็อป
            และทีวี
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="box-grediant">
          <img src={Kids} alt="ontv" />
          <h3>สร้างโปรไฟล์สำหรับเด็ก</h3>
          <p>
            สร้างโปรไฟล์สำหรับเด็ก
            เปิดโลกแห่งการผจญภัยให้บุตรหลานด้วยตัวละครโปรดในโปรไฟล์มุมเด็ก
          </p>
        </Col>
        <Col className="box-grediant">
          <img src={En} alt="" />
          <h3>ดาวน์โหลดเนื้อหาไว้รับชมออฟไลน์</h3>
          <p>บันทึกเนื้อหาโปรดได้ง่ายๆ และมีความบันเทิงพร้อมให้รับชมอยู่เสมอ</p>
        </Col>
      </Row>
    </Container>
  );
};

export default BoxContent;
