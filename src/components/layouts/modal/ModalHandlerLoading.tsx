import { Center, Modal, Spinner, Text } from "native-base";
import React from "react";

type Props = {
  loading: boolean;
  title?: string;
};

ModalHandlerLoading.defaultProps = {
  loading: false,
  title: "Loading ...",
};

function ModalHandlerLoading({ loading, title }: Props) {
  return (
    <Modal isOpen={loading}>
      <Center bg="gray.700" px="4" py="4" rounded="lg" maxW="1/2">
        <Spinner color="white" size="lg" mb="2" />
        <Text color="white" textAlign="center">
          {title}
        </Text>
      </Center>
    </Modal>
  );
}

export default ModalHandlerLoading;
