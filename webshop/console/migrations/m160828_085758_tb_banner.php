<?php

use yii\db\Migration;

class m160828_085758_tb_banner extends Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable('{{%tb_banner}}', [
            'idBanner' => $this->primaryKey(),
            'location' => $this->integer()->notNull(),
            'image' => $this->string()->notNull(),
            'tile_1' => $this->string(),
            'tile_2' => $this->string(),
            'tile_3' => $this->string(),
            'status' => $this->smallInteger()->notNull()->defaultValue(1),
            'created_at' => $this->integer()->notNull(),
            'updated_at' => $this->integer()->notNull(),
        ], $tableOptions);
    }

    public function down()
    {
        $this->dropTable('{{%tb_banner}}');
    }
}