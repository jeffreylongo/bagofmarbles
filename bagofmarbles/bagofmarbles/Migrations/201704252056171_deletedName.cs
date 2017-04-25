namespace bagofmarbles.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class deletedName : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Marbles", "Name");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Marbles", "Name", c => c.String());
        }
    }
}
