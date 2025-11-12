import {
  Box,
  Container,
  Heading,
  Text,
  Card,
  Flex,
  Avatar,
  Separator,
  Badge
} from '@radix-ui/themes';

function Profile() {
  return (
    <Container size="3" py="6">
      <Card>
        <Flex direction="column" gap="4">
          {/* Header Section */}
          <Flex align="center" gap="4">
            <Avatar
              size="8"
              radius="full"
              fallback="TH"
              color="blue"
            />
            <Box>
              <Heading size="7">ธัญญธร วงษ์จันทร์</Heading>
              <Text size="3" color="gray">นักศึกษาวิศวกรรมคอมพิวเตอร์</Text>
            </Box>
          </Flex>

          <Separator size="4" />

          {/* About Me Section */}
          <Box>
            <Heading size="5" mb="3">เกี่ยวกับฉัน</Heading>
            <Text>
              สวัสดีครับ ผมชื่อธัญญธร วงษ์จันทร์ ชื่อเล่น ต้นน้ำ มีความสนใจด้านสปัตยกรรมคอมพิวเตอร์ เเละ การทำเว็บแอปพลิเคชัน งานอดิเรก ออกกำลังกาย ฟังเพลง เล่นกีต้าร์ เล่นเกม ศึกษาภาษาใหม่ๆ
            </Text>
          </Box>

          <Separator size="4" />

          {/* Education Section */}
          <Box>
            <Heading size="5" mb="3">การศึกษา</Heading>
            <Card mb="3">
              <Flex direction="column" gap="2">
                <Heading size="4">ปริญญาตรี วิศวกรรมศาสตร์บัณฑิต</Heading>
                <Text color="gray">วิศวกรรมคอมพิวเตอร์</Text>
                <Text color="gray">มหาวิทยาลัยธุรกิจบัณฑิตย์</Text>
                <Text size="2" color="gray">2567 - ปัจจุบัน</Text>
              </Flex>
            </Card>
          </Box>

          <Separator size="4" />

          {/* Skills Section */}
          <Box>
            <Heading size="5" mb="3">ทักษะและความสามารถ</Heading>
            <Flex gap="2" wrap="wrap">
              <Badge size="2" color="blue">HTML/CSS</Badge>
              <Badge size="2" color="green">JavaScript</Badge>
              <Badge size="2" color="purple">TypeScript</Badge>
              <Badge size="2" color="orange">React</Badge>
              <Badge size="2" color="red">Node.js</Badge>
              <Badge size="2" color="cyan">Git</Badge>
              <Badge size="2" color="pink">Tailwind CSS</Badge>
              <Badge size="2" color="indigo">Radix UI</Badge>
            </Flex>
          </Box>
        </Flex>
      </Card>
    </Container>
  );
}

export default Profile;