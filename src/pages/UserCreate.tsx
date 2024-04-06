import { Create, useForm } from "@refinedev/antd";
import { Button, Form, Input } from "antd";
import React from "react";

interface IFormValue {
    name : string;
    email : string;
    skill : string;
}
export default function UserCreate(){
    const { formProps, saveButtonProps } = useForm<IFormValue>();
    return (
         <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">

                <Form.Item 
                 name = {"name"} 
                 label="Name" 
                 style={{maxWidth:"893px"}}
                 rules={[{required:true}]}
                 >
                <Input placeholder = "e.g John"/>
                </Form.Item>

                <Form.Item 
                name = {"email"} 
                label = "Email" 
                style={{maxWidth:"893px"}}
                rules ={[{required:true}]}
                > 
                <Input placeholder="e.g john@gmail.com"/>
                </Form.Item>

                <Form.List name={"skills"}>
                    {(fields,operator) => {
                        return(
                            <>
                            {fields.map((field,index) => {
                                return(
                                    <div key={field.key}>
                                        <Form.Item
                                            name={field.name}
                                            label={`skill - ${index+1}`}
                                            rules={[{ required : true}]}
                                            >
                                            <Input placeholder="e.g Java Script"/>
                                        </Form.Item>
                                    </div>
                                );
                            })}
                            <Form.Item>
                                <Button type="dashed" block>
                                    Add a skill
                                </Button>
                            </Form.Item>
                            </>
                        )
                    }}

                </Form.List>
            </Form>
        </Create>
  );
}

