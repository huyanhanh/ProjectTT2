import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../asset/images/Logo-2.png'

const footerAboutLink = [
  {
    display: 'Giới thiệu',
    path: '/about'
  },
  {
    display: 'Liên hệ',
    path: '/about'
  },
  {
    display: 'Tuyển dụng',
    path: '/about'
  },
  {
    display: 'Tin tức',
    path: '/about'
  },
  {
    display: 'Hệ thống cửa hàng',
    path: '/about'
  }

]

const footerCustomerLink = [
  {
    display: 'Chính sách đổi trả',
    path: '/about'
  },
  {
    display: 'Chính sách bảo hành',
    path: '/about'
  },
  {
    display: 'Chính sách hoàn tiền',
    path: '/about'
  }
]

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className="container">
          <Grid 
            col={4}
            mdCol={2}
            smCol={1}
            style={10}
          >
            <div>
              <div className="footer__title">
                Tổng đài hỗ trợ
              </div>
              <div className="footer__content">
                <p>
                  Liên hệ đặt hàng <strong>(024681013579)</strong>
                </p>
                <p>
                  Thắc mắc , phản hồi 
                </p>
                <p>
                  Gop ý, feedback
                </p>
              </div>
            </div>
            <div>
              <div className="footer__title">
                With Shop
              </div>
              <div className="footer__content">
                {
                  footerAboutLink.map((item, index) => (
                    <p key={index}>
                      <Link to={item.path} >
                        {item.display}
                      </Link>
                    </p>
                  ))
                }
              </div>
            </div>
            <div>
              <div className="footer__title">
                Chăm sóc khác hàng
              </div>
              <div className="footer__content">
                {
                  footerCustomerLink.map((item, index) => (
                    <p key={index}>
                      <Link to={item.path} >
                        {item.display}
                      </Link>
                    </p>
                  ))
                }
              </div>
            </div>
            <div className='footer__about'>
              <p>
                <Link to="/">
                  <img src={logo} className="footer__logo" alt="Logo" />
                </Link>
              </p>
              <p>
                Hướng đến mục tiêu mang lại niềm vui may mặc mới
                mỗi ngày cho hàng triệu người tiêu dùng Việt. 
                Hãy cùng chúng tôi hướng đến một cuộc sống 
                năng động, đầy tự tin , và thỏa chí đam mê
              </p>
            </div>
          </Grid>
        </div>
      </footer>
    </div>
  )
}

export default Footer