import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";
import cl from "./Load.module.css";

export default function Load() {
  return (
    <Flex className={cl.flex} align="center" gap="middle" color="">
      <Spin
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 48,
            }}
            spin
          />
        }
      />
    </Flex>
  );
}
