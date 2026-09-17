import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const ProfilePage = () => {
  return (
    <>
      <Container className='profilePageContainer p-5'>
        <Row className=''>
          <Col xs={12} md={12} lg={12}>
            <div className='profile-content-wrapper'>
              <div>
                <h3>My profile</h3>
                <p>Manage your personal information</p>
              </div>
              <div className='profile-Container'>
                <div className=''>
                  <div>
                    <h5>Profile Information</h5>
                    <p>Update your details below</p>
                  </div>
                  <div className='profileDetails-container p-5 m-5'>
                    <div>
                      <p>Image</p>
                      <h6>Bibek Hamal</h6>
                    </div>
                    <div>
                      <Form>
                        <Form.Group className='mb-3'>
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="fName"
                            placeholder="Enter your first name"
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label> Email</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone</Form.Label>
                          <Form.Control
                            type="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>About Me(Optional)</Form.Label>
                          <Form.Control
                            type="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                          />
                        </Form.Group>
                      </Form>

                    </div>
                    <div>
                      <Button className='button-save'>Save Changes</Button>
                      <Button className='button-cancel' variant='light'> Cancel</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='security-container'>
                <div>
                <h4>Account Security </h4>
                <p>Manage your password and security setting</p>
                </div>
                <div>
                  <Button className='button' variant='light'> Change Password </Button>
                  </div>

              </div>

            </div>

          </Col>
        </Row>
      </Container>

    </>
  )
}

export default ProfilePage