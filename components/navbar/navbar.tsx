import {Button, Dropdown, Link as NextLink, Navbar} from '@nextui-org/react';
import React from 'react';
import {useRouter} from 'next/router';
import {Url} from 'next/dist/shared/lib/router/router';
import {icons} from './icons';

export const Nav = () => {
   const router = useRouter(); 
   const collapseItems = [
      'Services',
      'About us',
      'Careers',
      'Contact us',
   ]; 

   return (
      <Navbar
         isBordered
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               background: '$black',
               borderBottom: 'none', 
               color: '$white'
            }, 
            'background': 'Black', 
            '@xsMax': {
               justifyContent: 'space-between',
            }, 
         }} 
      >
         <Navbar.Brand 
            css={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between',
               width: '100%',
               '@xsMax': {
                  justifyContent: 'space-between',
                  width: '100%',
               },
            }}
         >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', width: '100%' }}>
               <img src="logo.png" width={50} height={50} />
               <NextLink href="/" style={{color: 'white', whiteSpace: 'nowrap', fontSize: 25, fontWeight: 'bold',}}>CCS</NextLink>
            </div>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" style={{background: 'white', borderRadius: '4px'}} />
         </Navbar.Brand>

         <Navbar.Content
            hideIn="xs"
            css={{
               pl: '6rem', 
            }} 
         >
            <Dropdown isBordered>
               <Navbar.Item isActive>
                  <Dropdown.Button
                     auto
                     light
                     css={{
                        px: 0,
                        dflex: 'center',
                        svg: { pe: 'none' }, 
                        color: 'white'
                     }}
                     iconRight={icons.chevron}
                     ripple={false}
                  >
                     Services
                  </Dropdown.Button>
               </Navbar.Item>
               <Dropdown.Menu
                  aria-label="ACME features"
                  css={{
                     '$$dropdownMenuWidth': '340px',
                     '$$dropdownItemHeight': '70px',
                     '& .nextui-dropdown-item': {
                        'py': '$4',
                        'svg': {
                           color: '$secondary',
                           mr: '$4',
                        },
                        '& .nextui-dropdown-item-content': {
                           w: '100%',
                           fontWeight: '$semibold',
                        },
                     },
                  }}
               > 
                  <Dropdown.Item>
                     <NextLink href="/services#it-services">
                        <Button 
                           auto 
                           light
                           icon={icons.server} 
                           css={{
                              width: '100%',
                              justifyContent: 'flex-start',
                              color: '$text',
                              textTransform: 'none'
                           }} 
                        >
                           IT Services
                        </Button>
                     </NextLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                     <NextLink href="/services#llm-services">
                        <Button 
                           auto 
                           light
                           icon={icons.activity} 
                           css={{
                              width: '100%',
                              justifyContent: 'flex-start',
                              color: '$text',
                              textTransform: 'none'
                           }} 
                        >
                           LLM Services
                        </Button>
                     </NextLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                     <NextLink href="/services#software-development">
                        <Button 
                           auto 
                           light
                           icon={icons.flash} 
                           css={{
                              width: '100%',
                              justifyContent: 'flex-start',
                              color: '$text',
                              textTransform: 'none'
                           }} 
                        >
                           Software Development
                        </Button>
                     </NextLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                     <NextLink href="/services#outsourcing">
                        <Button 
                           auto 
                           light
                           icon={icons.scale} 
                           css={{
                              width: '100%',
                              justifyContent: 'flex-start',
                              color: '$text',
                              textTransform: 'none'
                           }} 
                        >
                           Outsourcing
                        </Button>
                     </NextLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                     <NextLink href="/services#support-services">
                        <Button 
                           auto 
                           light
                           icon={icons.user} 
                           css={{
                              width: '100%',
                              justifyContent: 'flex-start',
                              color: '$text',
                              textTransform: 'none'
                           }} 
                        >
                           Support
                        </Button>
                     </NextLink>
                  </Dropdown.Item>
               </Dropdown.Menu>
            </Dropdown>
            <NextLink href="/about" style={{color: 'white', whiteSpace: 'nowrap'}}>
               About us
            </NextLink>
            <NextLink href="/careers" style={{color: 'white', whiteSpace: 'nowrap'}}>Careers</NextLink>
            <NextLink href="/contact" style={{color: 'white', whiteSpace: 'nowrap'}}>Contact us</NextLink>
         </Navbar.Content>

         <Navbar.Collapse>
  {collapseItems.map((item, index) => (
    <Navbar.CollapseItem key={item}>
      <NextLink
        color="inherit"
        css={{
          minWidth: '100%',
        }}
        href={`/${item.split(' ')[0].toLowerCase()}`}
      >
        {item}
      </NextLink>
    </Navbar.CollapseItem>
  ))}
</Navbar.Collapse>
      </Navbar>
   );
};
