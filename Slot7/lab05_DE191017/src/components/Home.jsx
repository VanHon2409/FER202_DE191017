import React from 'react';
import { Container, Card } from 'react-bootstrap';

function Home() {
    return (
        <Container className="mt-4">
            <Card className="shadow-sm">
                <Card.Body>
                    <Card.Title>1. Thông tin tác giả </Card.Title>
                    <Card.Text>
                        * <strong>Mã SV:</strong> DE191017 <br />
                        * <strong>Họ tên:</strong> Nguyễn Văn Hơn <br />
                        * <strong>GitHub:</strong> <a href="https://github.com/VanHon2409/FER202_DE191017">Link Github</a>
                    </Card.Text>
                    <hr />
                    <Card.Title>2. Cấu trúc project </Card.Title>
                    <p>Project được tổ chức theo cấu trúc Component-based với React-Bootstrap.</p>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Home;
