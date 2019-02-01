import React from "react";

//import * as Adapter from 'enzyme-adapter-react-16';
import Adapter from 'enzyme-adapter-react-16';

import { mount, shallow, configure } from 'enzyme';
import About from "./About";

configure({adapter: new Adapter()});


describe("About component Suite", ()=> {
    

    it("about default test", ()=> {
        let wrapper = mount(<About  />);
        expect(wrapper.find("ul").length).toBe(1);
        expect(wrapper.find("li").length).toBe(2);
    })



    it("about addMember test", ()=> {
        let wrapper = mount(<About  />);
        let component = wrapper.instance();
        component.addMember(); // will not trigger render method

        wrapper.update(); // call render method

        expect(wrapper.find("ul").length).toBe(1);
        expect(wrapper.find("li").length).toBe(3);
    })


    it("about empty Members test", ()=> {
        let wrapper = mount(<About  />);
        let component = wrapper.instance();
        component.empty();
        wrapper.update();
        
        expect(wrapper.find("ul").length).toBe(1);
        expect(wrapper.find("li").length).toBe(0);
    })

    it("Likes test ", () => {
        let wrapper = mount(<About  />);
        let component = wrapper.instance();

        //wrapper.find("#up").prop('onClick')();
        // or
        //wrapper.find("#up").props().onClick();

        // or
        wrapper.find("#up").simulate('click'); // the only simulate click I want


        wrapper.update();
        expect(component.state.pageLikes).toBe(1);
        expect(wrapper.find("span").text()).toBe("1");

    })
 
    
});