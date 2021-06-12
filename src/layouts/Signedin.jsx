import React from 'react'
import { Dropdown,Image, Menu } from 'semantic-ui-react'

export default function Signedin({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.telifport.com%2Fgorsel%2Ftelifport%3FId%3DMzcxNTY0ODY2&psig=AOvVaw1V2u-esofG0qBIlyLqHYiL&ust=1623353984653000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCyoYSni_ECFQAAAAAdAAAAABAD"/>
                <Dropdown pointing="top left">
                    <Dropdown.Menu>
                        
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
            
        </div>
    )
}
